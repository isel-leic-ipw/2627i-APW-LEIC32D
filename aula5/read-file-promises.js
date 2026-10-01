//The Promise object represents the eventual completion (or failure)
// of an asynchronous operation and its resulting value.

//A Promise is in one of these states:

//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.

import fs from 'node:fs/promises'


function readFile1Txt(){
    const readPromise = fs.readFile("file1.txt")
    console.log(readPromise)

    return readPromise
        .then(data => console.log(data))
        .then(()=>5)
        .then(x => console.log(x))
        .catch(error => console.log("ERROR",error))
        
}

readFile1Txt()
    .then(()=>console.log("DONE"))
    
