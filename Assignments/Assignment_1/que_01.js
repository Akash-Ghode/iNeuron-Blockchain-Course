const prompt = require("prompt-sync")()

// 1. Write a program to find whether a given year is a leap year or not.

const year = prompt("Enter the Year: ");
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}