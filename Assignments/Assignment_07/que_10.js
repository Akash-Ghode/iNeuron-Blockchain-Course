const prompt = require("prompt-sync")()

// 10. Given a String S, achieve following tasks
// a) Convert the String into upper case.
// b) Convert only the first character to uppercase.

// c) Convert the String into lower case.
// d) Break the string into two halves and swap them.
// e) Count the repeating characters.
// f) Reverse the string

const string = prompt("Enter string: ")

upperCase(string);
firstCharacterUpperCase(string);
lowerCase(string)
breakAndSwap(string)
countRepeatingChar(string)
reverse(string)

function upperCase(string){
    console.log(string.toUpperCase())
}

function firstCharacterUpperCase(string){
    console.log(string.charAt(0).toUpperCase() + string.slice(1))
}

function lowerCase(string){
    console.log(string.toLowerCase())
}

function breakAndSwap(string){
    let start  = string.slice(0,string.length/2)
    let end = string.slice(string.length/2)
    console.log(end+start)
}

function countRepeatingChar(string){
    var count=0;
    const arr= []
    for(let i=0;i<string.length;i++){
        if(arr.includes(string[i]))
            count++;
        else
            arr.push(string[i])
    }
    console.log(count)
}
function reverse(string){
    console.log(string.split("").reverse().join(""))
}