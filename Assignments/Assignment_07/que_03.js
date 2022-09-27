const prompt = require('prompt-sync')()


// 3. Input a String S with two words, and replace first word with second word
// and display the result -
// Input: “Hii Boy” Output: “Boy Hii”


let input = prompt("Enter the string: ").split( " ")

const temp = input.pop()
input.unshift(temp)
input = input.join(" ")
console.log(input)
