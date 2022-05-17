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
        dateInput: document.querySelector('#add-task-date-picker'),
        errorOutput: document.querySelector('#error-placeholder'),
        textInputContainer: document.querySelector('#add-task'),
        mainTasksButton: document.querySelector('#main-tasks'),
        completedTasksButton: document.querySelector('#completed-tasks'),
        mainTasksCounter: document.querySelector('#main-tasks-counter'),
        completedTasksCounter: document.querySelector('#completed-tasks-counter'),
        tableContainer: document.querySelector('#to-do-container'),
        formContainer: document.querySelector('#form-container'),
        taskEditName: document.querySelector('#task-name'),
        taskEditDoneButton: document.querySelector('#done-button'),
        taskEditDatePicker: document.querySelector('#date-editor'),
        taskEditTextArea: document.querySelector('#task-notes'),
        taskEditDeleteButton: document.querySelector('#delete-button'),
        taskEditMenu: document.querySelector('#edit-task-form')


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

    function unCompleteToDo(e) {
        const id = e.target.parentNode.parentNode.getAttribute('task-id')
        removeToDo(id, 'fade')
        PubSub.publish('to-do-uncompleted', id)
        
    }

    function removeButtonClicked(e) {
        const id = e.target.parentNode.getAttribute('task-id')
        removeToDo(id, 'delete')
        PubSub.publish('to-do-removed', id)

    }


    function editButtonClicked(e) {
        const id = e.target.parentNode.getAttribute('task-id')
        domElements.taskEditMenu.setAttribute('task-being-edited', id)
        PubSub.publish('edit-button-clicked', id)
    }
    // ====== End publishing functions ======

    function toggleEditMenu() {


        if (domElements.formContainer.style.display === 'flex') {
            setTimeout(() => {
                domElements.taskEditMenu.style.display = 'none';
                domElements.formContainer.style.display = 'none';
            }, 290);

            // domElements.taskEditMenu.style.animation = 'fade-out 0.5s ease-out both'

            domElements.formContainer.animate([
                { opacity: 1 },
                { opacity: 0 }
            ],
                {
                    duration: 300,
                    iterations: 1,
                    easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
                    // fill: 'both'

                })


        }
        else {
            domElements.taskEditMenu.style.display = 'block';
            domElements.formContainer.style.display = 'flex';
            // domElements.taskEditMenu.style.animation = 'fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;'
            domElements.taskEditMenu.animate([
                { transform: 'translateY(-50px)', opacity: '0' },
                { transform: 'translateY(0)', opacity: '1' }
            ],
                {
                    duration: 300,
                    iterations: 1,
                    easing: 'ease-in',
                    // fill: 'both',
                })
        }

    }


    function clearTaskView() {

        domElements.tBody.innerHTML = '';
    }


    function setTaskEditParameters(name, dueDate, notes = '') {
        domElements.taskEditName.value = name;
        domElements.taskEditDatePicker.value = moment(dueDate).format('YYYY-MM-DD')
        domElements.taskEditTextArea.value = notes;
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
        dateInput.setAttribute('id', 'add-task-date-picker')
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

        document.querySelector('#add-task-date-picker').value = value
    }

    function getUserInput() {
        return {
            name: document.querySelector('#textInput').value,
            dueDate: new Date(document.querySelector('#add-task-date-picker').value)
        }
    }

    function removeToDo(id, animation = 'complete') {
        // How long the animation should run
        const animationSeconds = 0.6;
        const rowToRemove = document.querySelector(`tr[task-id="${id}"]`)


        // Animation varibles
        let borderColor = `border-color: ${colors.doneGreen}`
        let removeAnimation = "animation: slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;"

        if (animation === 'delete') {
            borderColor = `border-color: ${colors.errorRed}`
            removeAnimation = '	animation: slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;'
        }

        removeAnimation = removeAnimation.replace(/ \d.\ds /, ' ' + animationSeconds + 's ')
        rowToRemove.setAttribute('style', removeAnimation + '; ' + borderColor)


        setTimeout(() => domElements.tBody.removeChild(rowToRemove), (animationSeconds - 0.2) * 1000)
    }

    function getTaskBeingEdited() {
        return {
            id: +domElements.taskEditMenu.getAttribute('task-being-edited'),
            name: domElements.taskEditName.value,
            dueDate: new Date(domElements.taskEditDatePicker.value),
            notes: domElements.taskEditTextArea.value,
        }
    }


    function formatDate(date) {

        const today = new Date()

        if (date.getYear() === today.getYear() &&
            date.getMonth() === today.getMonth()) {

            switch (date.getDate() - today.getDate()) {
                case 0:
                    return 'Today'
                case 1:
                    return 'Tommorow'
                case 2:
                    return '2 Days from today'

                default:
                    return moment(date).format('MMMM Do YYYY')
            }
        }
        else {
            return moment(date).format('MMMM Do YYYY')

        }
    }


    function appendToDo(id, name, dueDate, skipCheckMark = false) {

        const row = document.createElement('tr')
        row.setAttribute('task-id', id)
        row.classList.add('task-row')
        for (let i = 0; i < 5; i++) {
            let td = document.createElement('td')
            if (i === 0) {

                td.classList.add('checkbox')
                const checkbox = document.createElement('input')
                checkbox.setAttribute('type', 'checkbox')

                if (!skipCheckMark) {
                    
                    td.addEventListener('change', (e) => completeToDo(e))
                }
                else {
                    checkbox.checked = true
                    td.addEventListener('change', (e) => unCompleteToDo(e))
                    row.classList.add('strikeout')
                }
                td.appendChild(checkbox)

            }
            else if (i === 1) {
                td.textContent = name
                td.classList.add('task-row-name')
            }
            else if (i === 2) {

                td.classList.add('task-row-date')
                td.textContent = formatDate(dueDate)

            }
            else if (i === 3) {

                td.classList.add('edit')
                if (!skipCheckMark) {
                    td.textContent = '✎'
                    td.addEventListener('click', (e) => editButtonClicked(e))

                }

            }
            else if (i === 4) {
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

    function editTask(id, newName, newDueDate) {
        const allTasks = [...document.querySelectorAll('.task-row')
        ]

        for (const row of allTasks) {
            let taskId = row.getAttribute('task-id')
            if (+taskId === id) {
                const taskRowName = row.querySelector('.task-row-name')
                taskRowName.textContent = newName

                const taskRowDate = row.querySelector('.task-row-date')
                taskRowDate.textContent = formatDate(newDueDate)

            }
        }

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
        toggleEditMenu,
        setTaskEditParameters,
        getTaskBeingEdited,
        editTask,
        domElements
    }

})();

export default Ui