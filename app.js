//function one
let num1 = 8;
let num2 = 6;

function addMyNumbers(num1, num2) {
    return(num1 + num2);
}
console.log(addMyNumbers(num1, num2));

//function two
function subMyNumbers(num1, num2) {
    return(num1 - num2);
}
console.log(subMyNumbers(num1, num2));

//function three
function multiplyMyNumbers(num1, num2) {
    return(num1 * num2);
}
console.log(multiplyMyNumbers(num1, num2));

//function four
function divMyNumbers(num1, num2) {
    return(num1 / num2);
}
console.log(divMyNumbers(num1, num2));


//arrow functions

//one
let add = (num1, num2) => num1 + num2;
console.log(add(num1, num2));

//two
let subtract = (num1, num2) => num1 - num2;
console.log(subtract(num1, num2));

// three
let multiply = (num1,num2) => num1 * num2;
console.log(multiply(num1, num2));

// four
let divide = (num1, num2) => num1 / num2;
console.log(divide(num1, num2))