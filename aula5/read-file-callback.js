import {readFile} from 'fs'

function processData(error, data){
    if(error) return console.log(error)
    console.log(data.toString())
}

readFile("file1.txt", processData)
console.log("DONE REALLY?")