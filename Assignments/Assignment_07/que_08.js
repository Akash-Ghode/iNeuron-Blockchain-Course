const prompt=require('prompt-sync')()

// 8. Write a Javascript function to test whether the first character of a string is lowercase.

const str = prompt("Enter a string")
check(str)

function check(str){
    if(str.charAt(0) === str.charAt(0).toLowerCase())
    console.log("True")
    else console.log("False")
}