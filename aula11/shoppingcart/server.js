import express from 'express'
import api from './lists-api.js'

const app = express()

app.use(express.json())

app.get("/lists", api.getLists)
app.get("/lists/:listId", api.getList)
app.post("/lists", api.createList)
app.put("/lists/:listId", api.updateList)
app.delete("/lists/:listId", api.deleteList)

app.post("/lists/:listId/items", api.addItem)
app.delete("/lists/:listId/items/:itemId", api.removeItem)

app.listen(8080, ()=>console.log("Listenning"))

