import moment from "moment";
import PubSub from "pubsub-js";

// PubSub emiiters defined here:
//to-do-completed => task-id
//to-do-removed => task-id

const Ui = (function () {

    const domElements = {
        tBody: document.querySelector('tbody'),
        textInput: document.querySelector('#textInput'),
        addButton: document.querySelector('#add-button'),
        dateInput: document.querySelector('input[type="date"]'),
        errorOutput: document.querySelector('#error-placeholder'),
        textInputContainer: document.querySelector('#add-task'),
        mainTasksButton: document.querySelector('#main-tasks'),
        completedTasksButton: document.querySelector('#completed-tasks'),
        mainTasksCounter: document.querySelector('#main-tasks-counter'),
        completedTasksCounter: document.querySelector('#completed-tasks-counter'),
        tableContainer: document.querySelector('#to-do-container')

    }



    const colors = {
        errorRed: 'rgb(148, 26, 37)',
        // doneGreen: 'rgb(37, 156, 64)',
        doneGreen: 'var(--doneGreen)',
        secondaryColor: 'var(--secondary)',

    }


    // Publishing functions
    function completeToDo(e) {
        const id = e.target.parentNode.parentNode.getAttribute('task-id')
        removeToDo(id)
        PubSub.publish('to-do-completed', id)

    }

    function removeButtonClicked(e) {
        const id = e.target.parentNode.getAttribute('task-id')
        removeToDo(id)
        PubSub.publish('to-do-removed', id)

    }
    // ====== End publishing functions ======


    function clearTaskView() {

        domElements.tBody.innerHTML = '';
    }

    function appendAddTaskRow() {

        const addTaskRow = document.createElement('tr')
        addTaskRow.setAttribute('id', 'add-task')

        const inputTd = document.createElement('td')
        const input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('placeholder', 'Quickly add a task')
        input.setAttribute('id', 'textInput')

        inputTd.appendChild(input)


        const p = document.createElement('p')
        p.setAttribute('id', 'error-placeholder')

        const dateTd = document.createElement('td')
        const dateInput = document.createElement('input')
        dateInput.setAttribute('type', 'date')

        dateTd.appendChild(dateInput)


        const buttonTd = document.createElement('td')
        buttonTd.setAttribute('id', 'button-td')


        const addButton = document.createElement('button')
        addButton.setAttribute('id', 'add-button')
        addButton.textContent = '+'

        buttonTd.appendChild(addButton)

        addTaskRow.appendChild(inputTd)
        addTaskRow.appendChild(p)
        addTaskRow.appendChild(dateTd)
        addTaskRow.appendChild(buttonTd)

        addButton.addEventListener('click', () => PubSub.publish('add-button-clicked', getUserInput()))
        input.addEventListener('input', () => PubSub.publish('input', getUserInput()))
        input.addEventListener('keydown', (e) => PubSub.publish('text-input-keydown', e.key))


        domElements.tBody.appendChild(addTaskRow)

        setDateInputDefaultValue()
    }

    function outputError(error) {
        domElements.errorOutput.textContent = error
        domElements.textInputContainer.style.borderColor = colors.errorRed
    }

    function clearError() {
        outputError('')
        domElements.errorOutput.style.display = 'none'
        domElements.textInputContainer.style.borderColor = colors.secondaryColor
    }

    function setDateInputDefaultValue(value = null) {
        if (value === null) {
            value = moment().format('YYYY-MM-DD')
        }

        document.querySelector('input[type="date"]').value = value
    }

    function getUserInput() {
        return {
            name: document.querySelector('#textInput').value,
            dueDate: new Date(domElements.dateInput.value)
        }
    }

    function removeToDo(id) {
        // How long the animation should run
        const animationSeconds = 0.6;
        const rowToRemove = document.querySelector(`tr[task-id="${id}"]`)


        // Easy access to animation
        const borderColor = `border-color: ${colors.doneGreen}`
        let removeAnimation = "animation: slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;"
        removeAnimation = removeAnimation.replace(/ \d.\ds /, ' ' + animationSeconds + 's ')

        rowToRemove.setAttribute('style', removeAnimation + '; ' + borderColor)
        setTimeout(() => domElements.tBody.removeChild(rowToRemove), (animationSeconds - 0.2) * 1000)

    }



    function appendToDo(id, name, dueDate, skipCheckMark = false) {

        const row = document.createElement('tr')
        row.setAttribute('task-id', id)
        for (let i = 0; i < 4; i++) {
            let td = document.createElement('td')
            if (i === 0) {

                td.classList.add('checkbox')
                const checkbox = document.createElement('input')
                checkbox.setAttribute('type', 'checkbox')
                if (!skipCheckMark) td.appendChild(checkbox)
                td.addEventListener('change', (e) => completeToDo(e))
            }
            else if (i === 1) {
                td.textContent = name
            }
            else if (i === 2) {

                const today = new Date()
                if (dueDate.getYear() === today.getYear() &&
                    dueDate.getMonth() === today.getMonth()) {
                    switch (dueDate.getDate() - today.getDate()) {
                        case 0:
                            td.textContent = 'Today'
                            break
                        case 1:
                            td.textContent = 'Tommorow'
                            break
                        case 2:
                            td.textContent = '2 Days from today'
                            break
                        default:
                            td.textContent = moment(dueDate).format('MMMM Do YYYY')
                    }
                }
                else {
                    td.textContent = moment(dueDate).format('MMMM Do YYYY')
                }


            }
            else if (i === 3) {
                td.classList.add('remove')
                td.textContent = 'x'

                td.addEventListener('click', (e) => removeButtonClicked(e))

            }
            row.appendChild(td)
        }
        domElements.tBody.appendChild(row)
        domElements.tBody.scrollTop = domElements.tBody.scrollHeight;

    }

    function clearTextInput() {
        document.querySelector('#textInput').value = ''
    }



    return {
        appendToDo,
        removeToDo,
        setDateInputDefaultValue,
        getUserInput,
        outputError,
        clearError,
        clearTextInput,
        clearTaskView,
        appendAddTaskRow,
        domElements
    }

})();

export default Ui