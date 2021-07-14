'use strict';
/*
Strict mode is to catch JavaScript in the console log as soon as an error occurs so as to prevent mistakes in the code. 

let hasDriversLicense = false; 
const passTest = true; 

if (passTest) hasDriversLicense = true;
io4o'if (hasDriversLicense) console.log(`I can drive.`);

const interfac = 'Audio';
// passTest === true ? hasDriversLicense = true :
// console.log(`It didn't work.`);
// console.log(passTest);
/*
/////////// FUNCTIONS 

Functions are pieces of code you can use over & over again. Like variables, but functions can hold 1 or more complete lines of code.
*/

function name(){
    console.log('My name is Shamal'); 

}
// Using a function is called: Calling, Running, or Invoking 

 name();
 name();
 name(); 
/*

 Look at the console, the function should've console.logged, "My name is Shamal", three times. That's basically It. 


 When writing a function, it can usually give and return data, to use later in the program. Think of it as a conveyer belt machine, put an apple in, you get apple juice.

 Ex:
 */
 function fruitProcessor(apples, oranges, pears, lemons){
     console.log(apples, oranges, pears, lemons);
     const juice = `Juice with ${apples} apples, ${oranges} oranges, ${pears}, pears, and ${lemons} lemons. `;
     return juice; 
 } 
 
 // things inside these parenthesis are called Parameters
 // return , returns any value within the function.

 /* 
 So what about the juice variable? Where did that go? The result of running the function IS the juice. These are called arguments. 
              👇  👇  👇  👇    
*/ 

fruitProcessor(0, 1 , 2, 3); 

/*
If you want to use the value that was returned in this case, juice, you need to store it n a variable. 
*/

const appleJuice = fruitProcessor(0, 1, 2 ,3);
console.log(appleJuice);

/* Now we can reuse it with different arguments and now receive a different output too. 

Ex: 
*/

const appleOrangePearLemonJuice = fruitProcessor(10, 20, 30, 40);
console.log(appleOrangePearLemonJuice);





 
