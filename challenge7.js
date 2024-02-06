// CHALLENGE #3
// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// et massMark = 78;
// let massJohn = 92;
// let heightMark = 1.69;
// let heightJohn = 1.95;

// let bmiMark =  massMark / heightMark**2;
// let bmiJohn = massJohn / heightJohn**2;
// console.log(bmiMark, bmiJohn);
// let markHigherBMI = bmiJohn > bmiMark;
// console.log(markHigherBMI);
let mark ={
    name: 'mark miller',
    mass:78,
    height:55.9,
    calcBMI:function(){
       return this.bmiMark =  this.mass / this.height**2
    }
}
let john ={
    name: 'john smith',
    mass:88,
    height:49.9,
    calcBMI:function(){
        return this.bmijohn =  this.mass / this.height**2
     }
}

let miller = console.log(mark.calcBMI());
let smith = console.log(john.calcBMI());
if(mark.bmiMark>john.bmijohn){
    console.log(`John Smith's BMI ${john.bmijohn} is higher than Mark Miller's ${mark.bmiMark}!.`);
}
else{
   
    console.log(`mark's BMI ${mark.bmiMark} is higher than smith's${john.bmijohn}  !.`);
}