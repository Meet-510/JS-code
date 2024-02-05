// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".



let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

let bmiMark =  massMark / heightMark**2;
let bmiJohn = massJohn / heightJohn**2;
console.log(bmiMark, bmiJohn);
let markHigherBMI = bmiJohn > bmiMark;
console.log(markHigherBMI);

if(bmiMark>bmiJohn){
    console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`);
}else{
    console.log(`John's BMI ${bmiJohn}is higher than Mark's! ${bmiMark}`);
}


