const prompt = require("prompt-sync")()

// 4. Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).

function prime(num1, num2) {
    const arrayOfPrime = [];

    //find prime numbers and add it in array of prime numbers
    for (let i = num1; i < num2; i++) {
        for (let j = 2; j <= i; j++) {
            if (i === j)
                arrayOfPrime.push(i);
            if (i % j === 0)
                break;
        }
    }
    
    //print factorial of prime numbers in defines range
    for(let i=0;i<arrayOfPrime.length;i++){
        console.log(factorial(arrayOfPrime[i]))
    }
    function factorial(x) {
        if (x === 1)
            return 1;
        return x * factorial(x - 1)
    }

}

// input from user
const input = prompt("Enter range e.g. 1-100: ")
const index = input.indexOf('-')
const num1 = parseInt(input.slice(0,index))
const num2 = parseInt(input.slice(index+1))
prime(num1, num2);