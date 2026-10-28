const lists = [
    {
        id : 1,
        name : "supermercado",
        items : []
    }

]

function getLists(){
    return lists
} 

function getList(id){
    return "getList"
} 

function createList(name){
    return "createList"
} 

function updateList(id, name, items){
    return "updateList"
} 

function deleteList(id){
   return "deleteList"
}

function addItem(name){
    return "addItem"
}

function removeItem(id){
    return "removeItem"
}

export default  {
    getLists,
    getList,
    createList,
    updateList,
    deleteList,
    addItem,
    removeItem
}

