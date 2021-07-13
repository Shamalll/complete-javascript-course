'use strict';
/*
Strict mode is to catch JavaScript in the console log as soon as an error occurs so as to prevent mistakes in the code. 

*/

let hasDriversLicense = false; 
const passTest = true; 

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive.`);


const interfac = 'Audio';
// passTest === true ? hasDriversLicense = true :
// console.log(`It didn't work.`);


// console.log(passTest);


/*
/////////// FUNCTIONS 

Functions are pieces of code you can use over & over again. Like variables, but functions can hold 1 or more complete lines of code.


*/

function logger(){
    console.log('My name is shamal'); 

};

// Using a function is called: 
// Calling
// Running 
// or Invoking 
logger();



function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`; 
    return juice;

}

fruitProcessor(5, 0); 

 
