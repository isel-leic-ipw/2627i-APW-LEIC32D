const numbers = [1,2,3,4]

console.log(numbers.filter(e => e % 2))

console.log(numbers.map(e => e * 2))

console.log(numbers.reduce((prev,curr)=> prev + curr, 0))

const triple = numbers.filter(e => e % 2)
                        .map(e => e * 3)

console.log(triple)
