function f1(){
    console.log("Hello World")
}

const a = f1()

const f2 = function() {return "Hello World"}

console.log(typeof(f2))
const b=f2()
console.log(b)


f2.email="user@example.com"
console.log(f2.email)

function f4(p1,p2, ...rest){
    console.log("Start f4")
    console.log(p1) 
    console.log(p2)
    console.log(rest)
}

f4()
f4(1)
f4(1,2)
f4(1,2,3)
f4(1,2,3,4,5,6,7,8,9)

const newObj = {}
newObj.f=function(){console.log("Function - F")}
newObj.str="STR"

function showProps(obj)
{
    for(let p in obj)
    {
        if(obj[p] instanceof Function){
            obj[p]()
        }

        console.log(p + " > " + obj[p])
    }
}

showProps(newObj)


function add(a,b){return a+b}
function sub(a,b){return a-b}

function  executeAndPrint(a,b,f){
    const r = f(a,b)
    console.log(r)
}

executeAndPrint(5,3,add)
executeAndPrint(5,3,sub)
executeAndPrint(5,2,(a,b)=>a*b)
executeAndPrint(5,2,(a,b)=>{ 
    const c = a/b
    return c 
})