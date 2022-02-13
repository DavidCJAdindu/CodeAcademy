/*   
Kelvin Weather

Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

For example, 283 K converts to 10 °C which converts to 50 °F.
*/




/* 
The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293. 

The value saved to kelvin will stay constant. Choose the variable type with this in mind. */

const kelvin = 293;

/* 
Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.

Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.
*/

const celsius = kelvin - 273;

/* 
Fahrenheit Formula: Celsius * (9/5) + 32

When you convert from Celsius to Fahrenheit, you often get a decimal number.

Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
*/

var fahrenheit = Math.floor(celsius * (9/5) + 32);

// fahrenheit 
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// celsius
console.log(`The temperature is ${celsius} degrees Celsius.`);



/*

Great work! Kelvin can now publish his forecasts in Celsius and Fahrenheit.

If you’d like extra practice, try this:

Convert celsius to the Newton scale using the equation below
Newton = Celsius * (33/100)

Round down the Newton temperature using the .floor() method
Use console.log and string interpolation to log the temperature in newton to the console

*/

const newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${newton} degrees Newton.`);


