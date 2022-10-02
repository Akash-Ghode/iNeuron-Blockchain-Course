const prompt = require('prompt-sync')()

// 2. Write a program to find whether a given number is armstrong number or
//    not-
//     The Armstrong number is a number that is equal to the sum of cubes of

//     its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
//     numbers. Let's try to understand why 153 is an Armstrong number.
//     153 = (1*1*1)+(5*5*5)+(3*3*3) where:
//     (1*1*1)=1
//     (5*5*5)=125
//     (3*3*3)=27
//     So:
//     1+125+27=153

const input = prompt('Enter an Integer: ');
var sum = 0;
for (let i = 0; i < input.length; i++) {
    sum += Math.pow(input[i], 3)
}

if (sum === Number(input))  //or use parseInt
    console.log(`${input} is an Armstrong number`)
else
    console.log(`${input} is not an Armstrong number`)


