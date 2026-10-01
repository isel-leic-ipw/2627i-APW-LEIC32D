const responsePromise = fetch("https://api.sampleapis.com/movies/animation")

responsePromise
    .then(resp => resp.json())
    .then(body => console.log(body))

console.log("DONE??????")