const ToDo = (function () {

    const toDoArray = []
    const doneArray = []

    let idCounter = 0;

    const proto = {
        type: 'to_do'
    }

  

    function createToDo(name, dueDate, notes='') {
        //dueDate is a javascript Date Object
        const newObj = Object.assign(Object.create(proto), { id: idCounter++, name, dueDate, notes })
        toDoArray.push(newObj)
        return newObj
    }

    function getToDoById(id) {
        for (const task of toDoArray) {
            if (task.id === id) {
                return task
            }
        }
    }

    function removeActiveToDo(id) {
        for (let i = 0; i < toDoArray.length; i++) {
            if (toDoArray[i].id === id) {
                toDoArray.splice(i, 1)
            }
        }
    }

    function removeCompletedToDo(id) {

        for (let i = 0; i < doneArray.length; i++) {
            if (doneArray[i].id === id) {
                doneArray.splice(i, 1)
            }
        }

    }

    function completeToDo(id) {


        for (let i = 0; i < toDoArray.length; i++) {
            if (toDoArray[i].id === id) {
                doneArray.push(toDoArray.splice(i, 1)[0])
            }
        }


    }


    function unCompleteToDo(id) {
        for (let i = 0; i < doneArray.length; i++) {
            if (doneArray[i].id === id) {
                toDoArray.push(doneArray.splice(i, 1)[0])
            }
        }
    }

    function getCompletedTasks() {
        return doneArray
    }

    function getCurrentMainTasks() {
        return toDoArray
    }


    function saveData() {
        const cleanedActiveToDos = []
        const cleanedCompletedToDos = []

        for (const task of toDoArray) {
            cleanedActiveToDos.push({name: task.name, dueDate: task.dueDate, notes: task.notes})
        }

        for (const task of doneArray) {
            cleanedCompletedToDos.push({name: task.name, dueDate: task.dueDate})
        }


        localStorage.setItem('active-to-dos', JSON.stringify(cleanedActiveToDos))
        localStorage.setItem('completed-to-dos', JSON.stringify(cleanedCompletedToDos))
    }


    function loadCompletedTasks(array) {
        for (const task of array) {
            doneArray.push({id: idCounter++, name: task.name, dueDate: new Date(task.dueDate)})
        }
    }


    function editTask(id, newName, newDueDate, newNotes) {
        for (const task of toDoArray) {
            if (task.id === id) {
                task.name = newName
                task.dueDate = newDueDate
                task.notes = newNotes
                break
            }
        }

    }
    // function getSavedData() {
    //     const array = JSON.parse(localStorage.getItem('to-dos')) || []
    // }

    return {
        createToDo,
        removeActiveToDo,
        removeCompletedToDo,
        completeToDo,
        getCompletedTasks,
        getCurrentMainTasks,
        saveData,
        loadCompletedTasks,
        getToDoById,
        editTask,
        unCompleteToDo,
        // saveData,
        // getSavedData
    }

})();

export default ToDo