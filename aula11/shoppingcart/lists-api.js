import services from './lists-services.js'


function getLists(request, response){
    const token = request.get('Authorization')
    return services.getUser(token)
            .then((user) => services.getLists(user.id))
            .then(lists=>response.json(lists))
  
} 

async function getList(request, response){
    const token = request.get('Authorization')
    return services.getUser(token)
           .then(user => services.getList(user.id,request.params.listId))
           .then(list =>  response.json(list))
           .catch(e => {
                if(e && e.code=="e1") response.status(404).json(e)
                else response.status(500).json(e)
            })
} 

function createList(request, response){
    
    const newListInput = request.body
     const token = request.get('Authorization')
    return services.getUser(token)
           .then(user => services.createList(user.id, newListInput.name))
           .then(list => response.json(list))
    
} 

function updateList(request, response){
    response.json("updateList")
} 

function deleteList(request, response){
    response.json("deleteList")
}

function addItem(request, response){
    response.json("addItem")
}

function removeItem(request, response){
    response.json("removeItem")
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

