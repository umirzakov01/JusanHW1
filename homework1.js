const prompt = require ("prompt-sync")({sigint: true})
const operator = prompt('Enter operator: ');  
  
const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: '));  
  
let result;  
  
if (operator == '+') { 
    result = number1 + number2;  
}  
else if (operator == '-') { 
    result = number1 - number2;  
}  
else if (operator == '*') {   
    result = number1 * number2;  
}  
else {  
    result = number1 / number2;  
}  
console.log("The result is ", result)