const prompt = require("prompt-sync")()

// 3. Write a program to find the factorial of a number.

const input = prompt("Enter an integer: ");
 console.log(factorial(input))

 function factorial(x){
    if(x===1)
        return 1;
    return x * factorial(x-1)
 }