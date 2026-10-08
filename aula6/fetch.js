function getAnimationMovies(){
    const responsePromise = fetch("https://api.sampleapis.com/movies/animation")
    return responsePromise
        .then(resp => resp.json())
        //.then(body => console.log(body))
}

function getClassicMovies(){
    const responsePromise = fetch("https://api.sampleapis.com/movies/classic")
    return responsePromise
        .then(resp => resp.json())
        //.then(body => console.log(body))
}


/*getAnimationMovies()
    .then(()=>getClassicMovies())
    .then(()=>console.log("Done"))*/


const promiseAnimation = getAnimationMovies()
const promiseClassic = getClassicMovies()

const promisesArray = [promiseAnimation,promiseClassic]

Promise.all(promisesArray)
    .then(array => console.log(array))
    .then(() =>console.log("Done"))




