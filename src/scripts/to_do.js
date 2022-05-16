const ToDo = (function () {

    const toDoArray = []
    const doneArray = []

    let idCounter = 0;

    const proto = {
        type: 'to_do'
    }



    function createToDo(name, dueDate) {
        //dueDate is a javascript Date Object
        const newObj = Object.assign(Object.create(proto), { id: idCounter++, name, dueDate })
        toDoArray.push(newObj)
        return newObj
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


    function getCompletedTasks() {
        return doneArray
    }

    function getCurrentMainTasks() {
        return toDoArray
    }
    // function saveData() {
    //     localStorage.setItem('to-dos', JSON.stringify(toDoArray))
    // }

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
        // saveData,
        // getSavedData
    }

})();

export default ToDo