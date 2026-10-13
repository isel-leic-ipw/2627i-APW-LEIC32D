import {games} from "./games.js"

function changeFetch(){
    fetch = function(url){
            return Promise.resolve(
                {
                    status : 200,
                    //ID tem de ser obtido do URL
                    json : () => Promise.resolve(games["ID3498"])
                })
    }
}


function printGameInfoThen(){
    return fetch("https://api.rawg.io/api/games/3498?key=c8b47b32d37a4c1d979bd5b6e0b50077")
        .then(resp=>{
            console.log(resp.status)
            if(resp.status != 200) return Promise.reject("Status Error")
            return resp.json()
        })   
        .then(game => console.log(game.name))
        .catch(error => {
                console.log(error)
                return Promise.reject(error)
            })
}

//changeFetch()

printGameInfoThen()
    .then(()=> console.log("DONE"))
    .catch(()=>"OCORREU um ERRO")

