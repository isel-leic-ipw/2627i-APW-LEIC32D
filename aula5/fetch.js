

function getAnimationMovies(){
    const responsePromise = fetch("https://api.sampleapis.com/movies/animation")
    return responsePromise
        .then(resp => resp.json())
        .then(body => console.log(body))
}

function getClassicMovies(){
    const responsePromise = fetch("https://api.sampleapis.com/movies/classic")
    return responsePromise
        .then(resp => resp.json())
        .then(body => console.log(body))
}



console.log("DONE??????")