/*
let js = 'amazing';
let myName = "Shamal";

console.log(myName);
console.log(myName);
console.log(myName);

// Other ways to write JS and it's rules.
// You can use ( "_" or "$").

let shamal_williams = "SW";
let $functionexample = 10;

// If the value is absolute like PI you are allowed to declare the value.

let person = "Shamal";
let PI = 3.141592653;

// Be as descriptive as possible for example: 

let myFirstJobWillBe = 'Developer';
let myCurrentJob = "Papa John's Delivery Driver"; 

let job1 = "coder";
let job2 = "delivery driver";
*/


/*
//////////////   Booleans ////////////
let learningJavascriptIsDifficult = true;
console.log(learningJavascriptIsDifficult);

// ^^we declared the booleans and now it holds the value of "true" ^^ \\

// Type of is to define what the value of a item is. Check you console log 👇👇👇
console.log (typeof true);
console.log (typeof learningJavascriptIsDifficult);
console.log (typeof 10);
console.log (typeof "Shamal"); 

// Changing the value of a variable.  Or, "Dynamic typing". 👇👇👇

learningJavascriptIsDifficult = "Yup!!";
console.log (typeof learningJavascriptIsDifficult);


// Now the value is "Yup!!" 👆👆👆

////////// Undefined ///////

let lol; 
console.log(lol);

 /// To redefine: 

 lol = "Laughing";

*/


/*
///// Var, Let, Const
// let: Declare variables that can change later. 
//ex: 
let age = 20;

age = 21;

// Reassigning ^^

//const: variables that are not supposed to change in the future. 

//ex: 
const myName = "Shamal";

/// My name will always be Shamal, therefore it's a const. const also cannot be undefined.

*/
/*
/// BASIC OPERATORS

 // There's many different types of operators such as: 

///////// Mathmatical (+, -, /, *, =)

const ageShamal = 2037 - 2000; //
const ageMother = 2037 - 1980;
console.log(ageShamal, ageMother);
// Don't repeat so declare a new value
const now = 2037;
const ageFather = now - 1982;
console.log( ageFather);

console.log(ageShamal * 10, ageFather / 5, ageMother ** 5);
// ** means ^ so 5^3 or "To the power of", which is 125.

///////// Assignment Operators
const firstName = "Shamal";
const lastName = "Williams";
console.log(firstName + " " + lastName)

let x = 10 + 2; // 12
x += 100; // x = x + 100
console.log(x); //112


/////////  Comparison  (//, >, <, =, >=, <=)
// Used to produce boolean values. 
console.log(ageFather > ageShamal);
// It's true that ageFather's value is greater than ageShamal value. 
console.log( ageShamal <= 20);


////////// Logical


*/

/////// Writing this all out can be a pain so in ES6 there was a much better way to make spaces and make it simpler. 
/*
const myName = "Shamal";
const futureJob = "Developer";
const birthYear = 2000; 
const currentYear = 2021;  

const Shamal = "I'm" +  " " + myName + "," + " " + "a" + " " + futureJob + "." + " " + "I was born in" + " " + birthYear + "." + " " + "I'm currently" + " " + (currentYear - birthYear) + " " + "years old.";

console.log(Shamal);



// A Template literal can space things out using a backtick. (button above the tab key)

const shamalNew = `I'm ${myName}, a ${currentYear - birthYear} year old ${ futureJob}. I was born in ${birthYear}.`;

console.log(shamalNew);

/// Another use is to use multi-lined string. Write the string using back-ticks, the indent (press the return/enter button idiot.)

console.log(`I'm  
${myName}.
I'm kind of a failure lol.
${currentYear - birthYear} years on this earth and I STILL can't land a decent job.
I'll keep pushing though. It's what I do... to a fault.`);
*/
// Use template literals to make code a little more cleaner. 

//////////////////////// Decisions (If/else statements) 

/// Make a drivers license tester to check eligibility to take test.
/*
const age = 1;
 
    if(age >= 17){
        console.log("You can start driving.");
    } else {
        const yearsLeft = 18 - age; 
        console.log(`You cannot start driving. You need to wait ${yearsLeft} years left`)
    };
*/

/*
    const birthYear = 1999;
    if(birthYear >= 2000){
        console.log("You were born before the 21st century.");
    } else{
        const yearsLeft = birthYear - 1;
        console.log(`You weren't born in the 21st century, you were born ${yearsLeft} before it, so you're in the 20th century.`)
    };
    */
/*
    const birthYear = 1999; 
    let century; 
    if(birthYear <= 1999 ){
         century = 20;
    } else{ 
        birthYear >= 2000;
         century = 21;
    };
    console.log(century);

*/




