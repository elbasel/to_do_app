import('./index.css')
import PubSub, { publish } from 'pubsub-js'
import ToDo from './scripts/to_do'
import Ui from './scripts/ui'

const App
    = (function () {

        let currentActiveView = 'main-tasks'

        function removeToDo(id) {

            if (currentActiveView === 'main-tasks') {
                ToDo.removeActiveToDo(id)
            }
            else if (currentActiveView === 'completed-tasks') {
                ToDo.removeCompletedToDo(id)
            }
        }

        function updateCounter() {
            Ui.domElements.mainTasksCounter.textContent = ToDo.getCurrentMainTasks().length
            Ui.domElements.completedTasksCounter.textContent = ToDo.getCompletedTasks().length
        }

        function addTask(name, dueDate, notes) {
            const newTask = ToDo.createToDo(name, dueDate, notes)
            Ui.clearTextInput()
            PubSub.publish('new-to-do', newTask)
        }

        function validateTask(msg, userInput) {

            const name = userInput.name
            const dueDate = userInput.dueDate
            Ui.domElements.errorOutput.style.display = 'none'

            // if (name.length >= 1 && name.length <= 20) {
            if (name.length >= 1) {

                if (msg === 'add-button-clicked') {
                    addTask(name, dueDate)
                }
                Ui.clearError()
            }
            else {
                if (msg === 'input' && Ui.domElements.textInput.value === '') {

                    Ui.clearError()
                    return
                }
                Ui.domElements.errorOutput.style.display = 'block'

                Ui.outputError('Title Must be between 1 and 20 characters long')

            }
        }

        function textInputKeydown(key) {
            if (key === 'Enter') {
                PubSub.publish('add-button-clicked', Ui.getUserInput())
            }
        }


        function showCompletedTasks() {


            if (currentActiveView === 'completed-tasks') return

            currentActiveView = 'completed-tasks'
            Ui.clearTaskView()
            for (const task of ToDo.getCompletedTasks()) {

                Ui.appendToDo(task.id, task.name, task.dueDate, true)
            }

            Ui.domElements.tBody.style.height = '100%'
            Ui.domElements.tableContainer.style.paddingBottom = '0px'
            Ui.domElements.tBody.style.paddingBottom = '16px'
        }


        function showMainTasks() {
            if (currentActiveView === 'main-tasks') return

            currentActiveView = 'main-tasks'
            Ui.clearTaskView()
            Ui.appendAddTaskRow()
            for (const task of ToDo.getCurrentMainTasks()) {
                Ui.appendToDo(task.id, task.name, task.dueDate)
            }

            Ui.domElements.tBody.style.height = '60%'
            Ui.domElements.tableContainer.style.paddingBottom = '2rem'
            Ui.domElements.tBody.style.padddingBottom = '0px'

            Ui.setDateInputDefaultValue()
        }


        function loadSavedData() {
            let savedActiveTodos = localStorage.getItem('active-to-dos')
            let savedCompletedTodos = localStorage.getItem('completed-to-dos')

            if (savedActiveTodos === '' || savedActiveTodos === '[]') {
                savedActiveTodos = []
            }
            else {
                savedActiveTodos = JSON.parse(savedActiveTodos)
            }

            if (savedCompletedTodos === '' || savedCompletedTodos === '[]') {
                savedCompletedTodos = []
            }
            else {
                savedCompletedTodos = JSON.parse(savedCompletedTodos)
            }

            for (const task of savedActiveTodos) {

                addTask(task.name, new Date(task.dueDate), task.notes)
            }



            ToDo.loadCompletedTasks(savedCompletedTodos)
            updateCounter()


            console.log(`Loaded ${savedActiveTodos.length} active tasks from memory`)
            console.log(`Loaded ${savedCompletedTodos.length} completed tasks from memory`)

        }

        function editTaskEventHandler(id) {
            const taskToEdit = ToDo.getToDoById(id)

            Ui.toggleEditMenu()

            Ui.setTaskEditParameters(taskToEdit.name, taskToEdit.dueDate, taskToEdit.notes)

        }

        function editTask(newTask) {
            ToDo.editTask(newTask.id, newTask.name, newTask.dueDate, newTask.notes)
            Ui.editTask(newTask.id, newTask.name, newTask.dueDate)
        }

        function keyPressEventHandler(e) {
            if (Ui.domElements.formContainer.style.display === 'flex' && (e.key === 'Escape' || e.key === 'Enter')) {
                Ui.toggleEditMenu()
                //redundant
                // PubSub.publish('task-edited', Ui.getTaskBeingEdited())

            }
        }


        function editMenuDoneButtonClickHandler() {
            const id = Ui.getTaskBeingEdited().id
            Ui.toggleEditMenu()
            PubSub.publish('to-do-completed', id)
            setTimeout(() => {
                Ui.removeToDo(id)

            }, 300);


        }

        function editMenueDeleteButtonClickHandler() {
            const id = Ui.getTaskBeingEdited().id
            Ui.toggleEditMenu()
            PubSub.publish('to-do-removed', id)
            setTimeout(() => {
                Ui.removeToDo(id, 'delete')

            }, 300);
        }


        function start() {


            PubSub.subscribe('text-input-keydown', (msg, key) => textInputKeydown(key))
            PubSub.subscribe('add-button-clicked', (msg, userInput) => validateTask(msg, userInput))
            PubSub.subscribe('new-to-do', (msg, task) => Ui.appendToDo(task.id, task.name, task.dueDate))
            PubSub.subscribe('input', (msg, userInput) => validateTask(msg, userInput))
            PubSub.subscribe('to-do-removed', (msg, id) => removeToDo(+id))
            PubSub.subscribe('to-do-completed', (msg, id) => ToDo.completeToDo(+id))
            PubSub.subscribe('completed-requested', (msg, data) => showCompletedTasks())
            PubSub.subscribe('main-tasks-requested', (msg, data) => showMainTasks())
            PubSub.subscribe('edit-button-clicked', (msg, id) => editTaskEventHandler(+id))
            PubSub.subscribe('task-edited', (msg, newTask) => editTask(newTask))


            PubSub.subscribe('to-do-removed', (msg, id) => updateCounter())
            PubSub.subscribe('to-do-completed', (msg, id) => updateCounter())
            PubSub.subscribe('new-to-do', (msg, id) => updateCounter())


            PubSub.subscribe('to-do-removed', (msg, id) => ToDo.saveData())
            PubSub.subscribe('to-do-completed', (msg, id) => ToDo.saveData())
            PubSub.subscribe('new-to-do', (msg, id) => ToDo.saveData())
            PubSub.subscribe('task-edited', (msg, newTask) => ToDo.saveData())

            // PubSub.subscribe('page-loaded', (msg, data) => loadSaved())
            Ui.domElements.addButton.addEventListener('click', () => PubSub.publish('add-button-clicked', Ui.getUserInput()))
            Ui.domElements.textInput.addEventListener('input', () => PubSub.publish('input', Ui.getUserInput()))
            Ui.domElements.textInput.addEventListener('keydown', (e) => PubSub.publish('text-input-keydown', e.key))
            Ui.domElements.completedTasksButton.addEventListener('click', () => PubSub.publish('completed-requested'))
            Ui.domElements.mainTasksButton.addEventListener('click', () => PubSub.publish('main-tasks-requested'))
            Ui.domElements.taskEditName.addEventListener('input', (e) => PubSub.publish('task-edited', Ui.getTaskBeingEdited()))
            Ui.domElements.taskEditDatePicker.addEventListener('input', (e) => PubSub.publish('task-edited', Ui.getTaskBeingEdited()))
            Ui.domElements.taskEditTextArea.addEventListener('input', (e) => PubSub.publish('task-edited', Ui.getTaskBeingEdited()))
            Ui.domElements.taskEditDoneButton.addEventListener('click', () => editMenuDoneButtonClickHandler())
            Ui.domElements.taskEditDeleteButton.addEventListener('click', () => editMenueDeleteButtonClickHandler())
            window.addEventListener('keydown', (e) => keyPressEventHandler(e))
            Ui.domElements.formContainer.addEventListener('click', (e) => {
                if (e.target !== e.currentTarget) return
                //redundant
                // PubSub.publish('task-edited', Ui.getTaskBeingEdited())
                Ui.toggleEditMenu()
            })

            Ui.setDateInputDefaultValue()

            loadSavedData()
        }



        return { start }

    })()


App.start()

