const prompt = require("prompt-sync")()

// 1. Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10

var x=1;
for(let i=1;i<=4;i++){
    let temp='';
    for(j=i;j>0;j--){
        temp+=x+" ";
        x++;
    }
    console.log(temp);
    temp="";
}