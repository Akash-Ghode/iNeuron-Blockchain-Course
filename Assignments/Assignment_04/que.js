const prompt = require('prompt-sync')()

// This assignment will help you interpret mathematical relationships both
// algebraically and geometrically.

// image available in "assignment_04"

// Create a function that takes a number (step) as an argument and returns the
// number of matchsticks in that step. See step 1, 2 and 3 in the image above.
// Take input from the user in the function parameter and return the output
// using the return statement.

// examples-
// matchHouses(1) ➞ 6

// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436

function matchHouses(n){
    if(n===0) return 0
    return 6 + 5 * (n-1)
}

const n = parseInt(prompt("Enter the number(steps) in Integer: "))
console.log(matchHouses(n))