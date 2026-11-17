const users = [
    {
        id : 1,
        name : "joao",
        token : "abcd"
    }
]

const lists = [
    {
        id : 1,
        userID : 1,
        name : "supermercado",
        items : []
    }
]

let nextID = 2


function getUser(token){
    console.log(token)
    return Promise.resolve(users.find(e => e.token == token))
} 

function getLists(userID){
    return Promise.resolve(lists.filter(l => l.userID == userID))
} 

function getList(userID, id){
    const list = lists.find((e)=>e.id==id && e.userID == userID)
    return Promise.resolve(list)
} 

function createList(userID, name){
    const list = {id:nextID++, userID, name, items : []}
    lists.push(list)
    return Promise.resolve(list)
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
    removeItem,
    getUser
}


