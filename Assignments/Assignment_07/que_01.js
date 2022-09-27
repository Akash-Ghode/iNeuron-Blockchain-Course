const prompt = require('prompt-sync')()

// 1. Input a String S, and check its length and if the length is greater than 4,
// truncate the input String and output the result -
// Input: Ice Output: Ice
// Input:Icecream Output:Icec...

let string = prompt("Enter the String: ");
if(string.length > 4){
    string = string.slice(0,4)
}
console.log(string);