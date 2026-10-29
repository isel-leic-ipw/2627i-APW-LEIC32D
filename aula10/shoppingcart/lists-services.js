import data from './lists-data.js'

function getLists(){
    return data.getList()
} 

function getList(id){
    return data.getList(id)
} 

function createList(name){
    return data.createList(name)
} 

function updateList(id, name, items){
    return data.updateList(id,name,items)
} 

function deleteList(id){
   return data.delete(id)
}

function addItem(name){
    return data.addItem(name)
}

function removeItem(id){
    return data.removeItem(id)
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

