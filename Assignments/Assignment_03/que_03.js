const prompt = require('prompt-sync')()

// 3. Write a program to find whether a given number is special number or

//     not-
//     If the sum of the factorial of digits of a number (N) is equal to the

//     number itself, the number (N) is called a special number.
//     eg- 145 is a special number
//     Logic- 1! + 4! + 5!= 1+24+120 i.e 145


const input = prompt('Enter an Integer: ');
var sum = 0;

for (let i = 0; i < input.length; i++) {
    sum += factorial(parseInt(input[i]))
}

function factorial(x) {
    if (x === 1)
        return 1;
    return x * factorial(x - 1)
}

if (sum === parseInt(input))
    console.log(`${input} is a special number`)
else
    console.log(`${input} is not a special number`)
