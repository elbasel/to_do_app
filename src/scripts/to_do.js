const ToDo = (function(){

    const toDoArray = []
    const doneArray = []

    let idCounter = 0;

    const proto = {
        type: 'to_do'
    }



    function createToDo(name, dueDate) {
        //dueDate is a javascript Date Object
        const newObj = Object.assign(Object.create(proto), {id: idCounter++, name, dueDate})
        toDoArray.push(newObj)
        return newObj
    }

    function removeActiveToDo(id) {
        toDoArray.splice(id, 1)
    }
    
    function removeCompletedToDo(id) {
        doneArray.splice(id, 1)
    }

    function completeToDo(id) {
        debugger
        const doneToDo = toDoArray.splice(id, 1)[0]
        doneArray.push(doneToDo)
        
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