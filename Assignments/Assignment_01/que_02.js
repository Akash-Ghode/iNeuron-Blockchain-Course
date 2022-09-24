const prompt = require("prompt-sync")()

// 2. Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C




        // User can specify the input in Celsius or Farenheit.

        const temperature = prompt("Enter temperature in Celsius or Fahrenheit e.g. 56C or 56F: ");

        const indexF = temperature.indexOf("F");
        const indexC = temperature.indexOf("C");

        if (indexF > 0) {
            const value = parseInt(temperature.slice(0, indexF));
            const ans = 5 * (value - 32) / 9;
            console.log(` ${value}°F is ${ans}°C `)
        } else if (indexC > 0) {
            const value = parseInt(temperature.slice(0, indexC));
            const ans = (value / 5 * 9) + 32;
            console.log(` ${value}°C is ${ans}°F `)
        } else {
            console.log("Invalid input, try again")
        }
                    
        //user input temperature converted to and from Celsius
                    
        // const temperature = parseInt(prompt("Enter temperature: "));
                    
        // const ansInfareneit = (temperature / 5 * 9) + 32;
        // console.log(` ${temperature}°C is ${ansInfareneit}°F `)
                    
        // const ansInCelsius = 5 * (temperature - 32) / 9;
        // console.log(` ${temperature}°F is ${ansInCelsius}°C `)