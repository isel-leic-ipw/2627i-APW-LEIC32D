const array = [123,,"STR"]

console.log(array)
console.log(array[0])
console.log(array[1])
console.log(array[2])

array.xpto=function(){return "xpto"}
console.log(array)
console.log(array.xpto())

array[100]="cento"
console.log(array)
console.log(array[100])