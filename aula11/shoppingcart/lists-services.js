import data from './lists-data.js'

function getLists(userID){
    return data.getLists(userID)
} 

function getList(userID, id){
    return data.getList(userID,id)
        .then(list => {
            if(list) return Promise.resolve(list)
            else return Promise.reject({code :"e1", message: "NOT FOUND"})
        }) 
    
   
} 

function createList(userID,name){
    return data.createList(userID, name)
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

function getUser(token){
    return data.getUser(token)
}

export default  {
    getLists,
    getList,
    createList,
    updateList,
    deleteList,
    addItem,
    removeItem,
    getUser
}

