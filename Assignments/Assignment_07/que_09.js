const prompt = require("prompt-sync")()

// 9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
// (any combination) using string methods.
// How will you handle that ?
const str = prompt("Enter yes")
console.log(str.toLowerCase() === "yes" ? "Correct" : "Incorrect")