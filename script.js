function add(a, b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
const a = parseInt(prompt("Enter your first number:"))
const b = parseInt(prompt("Enter your second number: "))
console.log(add(a,b))
console.log(subtract(a,b))
console.log(multiply(a,b))
console.log(divide(a,b))