import('./index.css')
import PubSub from 'pubsub-js'
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

        function addTask(name, dueDate) {
            const newTask = ToDo.createToDo(name, dueDate)
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

            PubSub.subscribe('to-do-removed', (msg, id) => updateCounter())
            PubSub.subscribe('to-do-completed', (msg, id) => updateCounter())
            PubSub.subscribe('new-to-do', (msg, id) => updateCounter())

            // PubSub.subscribe('page-loaded', (msg, data) => loadSaved())
            Ui.domElements.addButton.addEventListener('click', () => PubSub.publish('add-button-clicked', Ui.getUserInput()))
            Ui.domElements.textInput.addEventListener('input', () => PubSub.publish('input', Ui.getUserInput()))
            Ui.domElements.textInput.addEventListener('keydown', (e) => PubSub.publish('text-input-keydown', e.key))
            Ui.domElements.completedTasksButton.addEventListener('click', () => PubSub.publish('completed-requested'))
            Ui.domElements.mainTasksButton.addEventListener('click', () => PubSub.publish('main-tasks-requested'))
            // window.addEventListener('load', PubSub.publish('page-loaded'))
            Ui.setDateInputDefaultValue()


        }



        return { start }

    })()


App.start()

