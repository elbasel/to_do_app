const ToDo = (function(){

    const toDoArray = []

    const proto = {
        type: 'to_do'
    }



    function createToDo(name, dueDate) {
        const newObj = Object.assign(Object.create(proto), {id: toDoArray.length, name, dueDate})
        toDoArray.push(newObj)
        return newObj
    }

    function removeToDo(id) {
        toDoArray.splice(id, 1)
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
        // saveData,
        // getSavedData
    }

})();

export default ToDo