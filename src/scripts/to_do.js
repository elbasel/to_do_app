const ToDo = (function(){

    const toDoArray = []
    const doneArray = []

    const proto = {
        type: 'to_do'
    }



    function createToDo(name, dueDate) {
        //dueDate is a javascript Date Object
        const newObj = Object.assign(Object.create(proto), {id: toDoArray.length, name, dueDate})
        toDoArray.push(newObj)
        return newObj
    }

    function removeToDo(id) {
        toDoArray.splice(id, 1)
    }

    function completeToDo(id) {
        const doneToDo = toDoArray.splice(id, 1)
        doneArray.push(doneToDo)
        console.log({doneArray})
        
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
        removeToDo,
        completeToDo,
        getCompletedTasks,
        getCurrentMainTasks,
        // saveData,
        // getSavedData
    }

})();

export default ToDo