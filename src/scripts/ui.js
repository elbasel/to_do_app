import moment from "moment";
import PubSub from "pubsub-js";


const Ui = (function () {

    const domElements = {
        tBody: document.querySelector('tbody'),
        textInput: document.querySelector('#textInput'),
        addButton: document.querySelector('button'),
        dateInput: document.querySelector('input[type="date"]'),
        errorOutput: document.querySelector('#error-placeholder'),
        textInputContainer: document.querySelector('#add-task')
    }


    const colors = {
        errorRed: 'rgb(148, 26, 37)',
        doneGreen: 'rgb(37, 156, 64)',
        secondaryColor: 'var(--secondary)',

    }

    function sayHi() {
        console.log('Ui Module working fine')
    }

    // function scrollToBottom() {
    //         domElements.tBody.scrollTop = domElements.tBody.scrollHeight;
    // }

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
        domElements.dateInput.value = value
    }

    function getUserInput() {
        return {
            name: domElements.textInput.value,
            dueDate: new Date(domElements.dateInput.value)
        }
    }

    function removeToDo(id) {
        // How long the animation should run
        const animationSeconds = 1;
        const rowToRemove = document.querySelector(`tr[task-id="${id}"]`)

        // rowToRemove.setAttribute('style', `animation: scale-out-center ${animationSeconds}s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;`)

        // Easy access to animation
        // rowToRemove.style.borderColor = colors.doneGreen
        const borderColor = `border-color: ${colors.doneGreen}`
        let removeAnimation = "animation: slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;"
        removeAnimation = removeAnimation.replace(/ \d.\ds /, ' ' + animationSeconds + 's ')

        rowToRemove.setAttribute('style', removeAnimation + '; ' + borderColor)
        // rowToRemove.style.animation = removeAnimation
        setTimeout(() => domElements.tBody.removeChild(rowToRemove), animationSeconds * 1000)

        // domElements.tBody.removeChild(rowToRemove)
        PubSub.publish('to-do-removed', id)
    }


    function appendToDo(id, name, dueDate) {

        const row = document.createElement('tr')
        row.setAttribute('task-id', id)
        for (let i = 0; i < 4; i++) {
            let td = document.createElement('td')
            if (i === 0) {
                td.classList.add('checkbox')
                const checkbox = document.createElement('input')
                checkbox.setAttribute('type', 'checkbox')
                td.appendChild(checkbox)
                td.addEventListener('change', (e) => removeToDo(e.target.parentNode.parentNode.getAttribute('task-id')))
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
                            td.textContent = 'Day After Tommrow'
                            break
                        default:
                            td.textContent = moment(dueDate).format('MMMM Do YYYY')
                    }
                }
                else {
                    td.textContent = moment(dueDate).format('MMMM Do YYYY')
                }


            }
            else {
                td.classList.add('remove')
                td.textContent = 'x'

                td.addEventListener('click', (e) => removeToDo(e.target.parentNode.getAttribute('task-id')))
            }
            row.appendChild(td)
        }
        domElements.tBody.appendChild(row)
        domElements.tBody.scrollTop = domElements.tBody.scrollHeight;

    }

    function clearTextInput() {
        domElements.textInput.value = ''
    }

    return {
        appendToDo,
        removeToDo,
        // scrollToBottom,
        setDateInputDefaultValue,
        getUserInput,
        outputError,
        clearError,
        clearTextInput,
        sayHi,
        domElements
    }

})();

export default Ui