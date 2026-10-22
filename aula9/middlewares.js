import express from 'express'

const app = express()

app.use(m2)
app.use("/auth",m1)
app.use(m3)

app.get("/", rootHandler)
app.get("/path", pathHandler)

app.listen("8080", ()=>console.log("LISTENING!!!"))

function pathHandler(req, resp){
    console.log("Path Handler")
    resp.json("Path Handler")
}

function m1(request, response, next){
    console.log("M1", Date())
    next()
}

function m2(request, response, next){
    console.log("M2")
    next()
}

function m3(request, response, next){
    console.log("M3")
    next()
}

function rootHandler(request, response){
    console.log("rootHandler")
    response.json("rootHandler")
}