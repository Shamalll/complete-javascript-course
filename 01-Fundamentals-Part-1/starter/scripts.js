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

///////// Mathematical (+, -, /, *, =)

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

    Testing the commit!!!


    -------Conversion/coercion  types-------

    Type Conversion is when you manually covert something, coercion is when JavaScript does it by itself. 

    type coercion 

    converts one of the values to the other value so its ran correctly. 

    So if I go, 
    
    console.log('I am,'+ 23 + 'years old.')
    
    JavaScript automatically convert it. It triggered a coercion to make 23 a string. 


    ---Truthy / Falsey---

    -Values thats aren't false but will become false when converted into a boolean.

    Ex- 0, Null, NaN, '', undefined.
    ex2-

    console.log(Boolean(0)); -false
    console.log(Boolean(undefined)); -false
    console.log(Boolean('Shamal')); -true
    console.log(Boolean({})); - true 
    console.log(Boolean('')); -false

    JavaScript again, does coercion. 
    Never used the Boolean(); function though, useless in most cases.




////////////  === vs ==


The difference between  === and == is that === does not perform type coercion.  

=== is called the strict equality operator. 

== is called the loose equality operator. It DOES perform type coercion. 

Example- 
console.log('20' == 20);  ( == allows type coercion)
true
console.log('20' === 20);  ( === does NOT allow type coercion)
false




***** WARNING *****

Avoid using loosing(==) type coercion as much as possible.

/////////////////////////////////////// 

How to get a value from a web page.












// prompt(`What's your favorite color?`)



// const color = prompt(`What's your favorite color?`);
// const myColor = "Indigo"; 
// const otherColor = ["Red", "red", "Orange", "orange", "Yellow", "yellow", "Green", "green", "Blue", "blue", "Violet", "violet", "Black", "black", "White", "white"];


// if(color === otherColor){
//     console.log(`Those colors aren't as good mine lol.`)
// } else if(color === myColor){
//     console.log(`Good color, good man.`)
//     }
//     else if(color !== otherColor) {
//         console.log(`That wasn't a color. Try again.`)
//     }
//         else {
//         console.log(`Neither pieces of code were logged, idiot. `)

//     };


Forgot to commit for the last 3 weeks LOL.


/////////// Basic boolean logic: And, or, not operators. //////////

A and B (And operator)

"Sarah has a Drivers license AND Good Vision!" -->


Example: 
A.) Sarah has a drivers license 
B.) Sarah has good vision.

To figure out the values, you use a Truth
 
if A and b are both true, then the boolean is true.
if A is true and B is false, then the boolean is false.
if A is false and B is true, then the boolean is false.
if A is false and B is false, then the boolean is false.

Ex: 
*/

//  const name = `Sarah`;s3`    q
//  const age = 16;
//  const ranA = (Math.random() * 15.99) +1;
//  const ranB = (Math.random() * 9.99) +1;
//  const goodVision = 10;
//  const badVision = 9.99;


//  if(ranA <= age && ranB <= badVision){
//      console.log(`${name} is too young too drive, and has bad vision!`)
//  } else {
//      age >= ranA && goodVision >= ranB;
//      console.log(`${name} is old enough to drive and has perfect vision!`);
//  };
 /*
 To sum up, if BOTH booleans are true, then the statement is true.

///////////////////////

A OR B (or operator)

"Sarah has a Drivers license OR good vision"
32s s

if A and/or B is true, then the boolean is true.
if A is true but B is false, then the boolean is true.
if A is false and B is true, then the boolean is true.
if A is false and B is false, then the boolean is false.

Ex:
*/
// const names = [
//     "Shamal",
//     "Williams", 
//     20
// ]; 


// text = "<ul>"; 

// for (let i = 0; i < names; i++) {
//     text += "li>" + names[i] + "</li>";
// }
// text += "<ul>";

// console.log(names);

// if(ranA || ranB >= age){
//     console.log(`This statement is true because somehow, cause ${ranA} and ${ranB} is larger than ${age}....somehow.`)
// } else { 
//     ranA || ranB <= age;
//     console.log(`This statement is false because ${ranA} and ${ranB} is smaller than ${age}!`)
// };

/*
To sum up, if ONE boolean is true, then the statement is true.

//////////////////

A NOT B (not operator)


*/

// // Ex for And or not:

// const hasDriverLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision); // true
// console.log(hasDriverLicense || hasGoodVision); // false
// console.log(!hasDriverLicense); // false

// // const shouldDrive = hasDriverLicense && hasGoodVision; 
// // const shouldntDrive = !hasDriverLicense && !hasGoodVision; 

// // if(hasDriverLicense && hasGoodVision){
// //     console.log(`Sarah is allowed to drive!`);
// // } else {
// //     console.log(`Sarah shouldn't drive!`);
// // };


// const isTired = false; //C
// console.log(hasDriverLicense || hasGoodVision || isTired);


// if(hasDriverLicense && hasGoodVision && !isTired){
//     console.log('Sarah can drive! Hooray!');
// } else {
//     console.log(`Still can't drive loser`);
// };

///////// SWITCH (Another way of using if/else statements)

// const days = 'Friday';

// switch(days){
//     case 'Monday':
//         console.log(`Go to gym.`);
//         console.log(`Code`);
//         break;
//     case 'Tuesday':
//         console.log(`Diet and code.`);
//         break;
//     case 'Wednesday':
//         break;
//     case 'Thursday':
//         console.log(`switch command practice.`);
//         break;
//     case 'Friday': // day == 'Friday';
//         console.log(`Cheat day.`);
//         break;
//     case 'Saturday':
//         console.log(`Work`);
//         break;
//     case 'Sunday':
//         console.log(`Work... again.`);
//         break;
//     default:
//         console.log(`Not a value day, invalid.`)
// };

// if(days === 'Friday'){
//     console.log(`Cheat day.`);
// } else if (days === 'Saturday'){
//     console.log(`Work`);
// } else if (days === 'Sunday'){
//     console.log(`Work... again.`);

// } else{
//     console.log(`This doesn't work!`);
// };




/*

/////////// Difference between Statements & Expression.

A expression is like a sentence, and a statement is like the words that complete the sentence. 



Expression: Piece of code that produces a value in the output. 

ex.) strings( const name = 'toto'; ), 3 + 4 or 2000; or true && False && !false
/// The answer itself isn't a expression, but
if it produces a value, that's an  expression.


Statement: A bigger piece of code that doesn't produce a value
Ex.) If/else, Switch, case. 
 */

/*
 //////////// Conditional (Ternary) Operator

 This allows you to write a conditional in one line similar to an if/else statement.


 Ternary Operator:   ?
    syntax:   
            (statement)
            (condition) ? (if part) : 
            (else part);
 Ex:
 
 const age = 20; 
 age >= 18 ? console.log("I like to drink liquor ") : 
 console.log("I fucking hate soda."); 

//  A more efficient way to do it would be: 


 const drink = age >= 18 ? console.log("liquor ") : 
 console.log("soda"); 

*/
    

    




 


















































/*
 const time = '09:30';

 let = time.length;

 function

 if(time[len-2]+time[len-1] === 'PM'){
     let  hr = parseInt(time.splice(0.2))+12;
     let ans = toString(hr);
     for(let i=2; i< len; i++){
         ans += time[i];
     }
     alert(ans);
 } else {alert
 }

 console.log(time);





&&&&&&&&&Objects Practice

const phone = {

    brand: ['Samsung', 'Google', 'Apple'],
    quantity: [1, 2, 3],
    howManyGooglePhones: function(){
        alert("There are" + " "+  this.quantity[2] + " " + this.brand[0] +
        `phones available.`);
    }
}

phone.howManyGooglePhones();

*/