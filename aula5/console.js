
function changeConsoleLog(){
    const oldConsoleLog = console.log
    console.log = function(p){
        const d = Date()
        oldConsoleLog.call(console,d,p)
    }
}

changeConsoleLog()

console.log("Hello World")