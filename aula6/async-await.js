

function printGameInfoThen(){
    return fetch("https://api.rawg.io/api/games/3498?key=c8b47b32d37a4c1d979bd5b6e0b50077")
        .then(resp=>{
            console.log(resp.status)
            return resp.json()
        })   
        .then(game => console.log(game.name))
        .catch(error => console.log(error))
}

async function printGameInfoAwait(){
    try{
        const resp = await fetch("https://api.rawg.io/api/games/3498?key=c8b47b32d37a4c1d979bd5b6e0b50077")
        console.log(resp.status)
        const game = await resp.json()
        console.log(game.name)
        return 5
    }catch(error){
        console.log(error)
    }
    
}

printGameInfoThen()
    .then((()=>console.log("DONE")))

printGameInfoAwait()
    .then(a=>console.log(a))
    .then((()=>console.log("DONE")))
