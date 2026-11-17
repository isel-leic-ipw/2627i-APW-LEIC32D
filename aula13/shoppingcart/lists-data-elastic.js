//TODO Errors

const baseURL = "http://localhost:9200/"

function getUser(token){
    return fetch(baseURL + `users/_search?q=token.keyword:"${token}"`, {
            headers : {"Accept" : "application/json"}
         })
        .then(response => response.json())
        .then(body => {
            return body.hits.hits.map(t => { return {id : t._id , userName : t._source.userName}})[0]
        })
}

function createList(userID, name){
    const body = {
        name : name,
        userID : userID,
        items : []
    }
    return fetch(baseURL + `lists/_doc`, {
        method : "POST",
        body : JSON.stringify(body),
        headers : {
            "Content-Type" : "application/json", 
            "Accept" : "application/json"}
     })
    .then(response => response.json())
    .then(result => {return {id : result._id, text : text, userId : userId}})    
}

function getList(userID, id){
    console.log(userID,id)
    return fetch(baseURL + `lists/_search?q=_id:"${id}" AND userID:"${userID}"`, {
                headers : {"Accept" : "application/json"}
        })
        .then(response => response.json())
        .then(body => {
            return body.hits.hits.map(t => ({ id : t._id, ...t._source}))[0]
        })
}


function getLists(userID){
    return fetch(baseURL + `lists/_search?q=userID:"${userID}"`, {
        headers : {"Accept" : "application/json"}
    })
    .then(response => response.json())
    .then(body => body.hits.hits.map(t => ({ id : t._id, ...t._source}) ))
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

export const data ={
    getUser,
    getLists,
    getList,
    createList,
    updateList,
    deleteList,
    addItem,
    removeItem,
}

export default data