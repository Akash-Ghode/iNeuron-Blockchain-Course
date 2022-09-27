const prompt = require("prompt-sync")()

// 4. Input a String S with a word, and replace character “a” with “x” and
// display the result -
// Input: “apple” Output: “xpple”

let input = prompt("Enter a word containing a: ")

while(input.includes("a"))
        input = input.replace("a","x")


console.log(input)
