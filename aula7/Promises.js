const promiseResolve = Promise.resolve(5)
const promiseReject = Promise.reject("Error")

promiseResolve
    .then(console.log)
    .catch(console.log)

promiseReject
    .then(console.log)
    .catch(console.log)
