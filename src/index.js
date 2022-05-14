import('./index.css')
import PubSub from 'pubsub-js'
import ToDo from './scripts/to_do'
import Ui from './scripts/ui'

const _ = (function () {





    function addTask(name, dueDate) {
        const newTask = ToDo.createToDo(name, dueDate)
        Ui.clearTextInput()
        PubSub.publish('new-to-do', newTask)
    }

    function validateTask(msg, userInput) {
        const name = userInput.name
        const dueDate = userInput.dueDate
        Ui.domElements.errorOutput.style.display = 'none'
        if (name.length >= 1) {
            if (msg === 'add-button-clicked') {
                addTask(name, dueDate)
            }
            Ui.domElements.errorOutput.style.display = 'none'
            Ui.outputError('')
        }
        else {
            if (msg === 'input' && Ui.domElements.textInput.value === '') {
                
                Ui.domElements.errorOutput.style.display = 'none'
                return
            }
            Ui.domElements.errorOutput.style.display = 'block'

            Ui.outputError('Name Must be more than 1 characters long')

        }
    }

    function textInputKeydown(key) {
        if (key === 'Enter') {
            PubSub.publish('add-button-clicked', Ui.getUserInput())
        }
    }

    // function loadSaved() {
    //     const saved = ToDo.getSavedData()
    //     for (const item of saved) {
    //         addTask(item.name, item.dueDate)
    //     }
    // }




    function start() {


        PubSub.subscribe('text-input-keydown', (msg, key) => textInputKeydown(key))
        PubSub.subscribe('add-button-clicked', (msg, userInput) => validateTask(msg, userInput))
        PubSub.subscribe('new-to-do', (msg, task) => Ui.appendToDo(task.id, task.name, task.dueDate))
        PubSub.subscribe('input', (msg, userInput) => validateTask(msg, userInput))
        PubSub.subscribe('to-do-removed', (msg, id) => ToDo.removeToDo(id))
        // PubSub.subscribe('page-loaded', (msg, data) => loadSaved())
        Ui.domElements.addButton.addEventListener('click', () => PubSub.publish('add-button-clicked', Ui.getUserInput()))
        Ui.domElements.textInput.addEventListener('input', () => PubSub.publish('input', Ui.getUserInput()))
        Ui.domElements.textInput.addEventListener('keydown', (e) => PubSub.publish('text-input-keydown', e.key))
        // window.addEventListener('load', PubSub.publish('page-loaded'))
        Ui.setDateInputDefaultValue()


    }


    return { start }

})();


_.start()