const prompt = require("prompt-sync")()

// 1. Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene

function triangle(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        console.log("Equilateral Triangle")
    } else if (side1 === side2 || side2 === side3 || side3 === side1) {
        console.log("Isoceles Triangle")
    } else {
        console.log("Scalene Triangle")
    }
}

const side1 = prompt("Enter side 1 of triangle")
const side2 = prompt("Enter side 2 of triangle")
const side3 = prompt("Enter side 3 of triangle")

triangle(side1, side2, side3);