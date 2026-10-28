import services from './list-services.js'


function getLists(request, response){
    const lists = services.getLists()
    response.json(lists)
} 

function getList(request, response){
    const list = services.getList(request.params.listId)
    response.json(list)
} 

function createList(request, response){
    const newListInput = request.body
    const list = services.createList(newListInput.name)
    response.json(list)
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

