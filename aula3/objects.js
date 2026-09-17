const std = {name: "Filipe", number : 12123}
console.log(std)
console.log(std.name)
console.log(std.number)

std.email = "filipe@example.com"
console.log(std)

delete std.email
console.log(std)

console.log(std.number)
console.log(std["number"])


function showProps(obj)
{
    for(let p in obj)
    {
        console.log(p + ": " + obj[p])
    }
}

showProps(std)

