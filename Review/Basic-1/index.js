// type conversion
const inputYear = "1990";
console.log(Number(inputYear) + 10);
// so generally we receive values in strings , so we have to convert them into numbers

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense || hasGoodVision);

// switch case statement

const day = "monday";

switch (day) {
  case "monday":
    console.log("plan course structure");
    break;
  case "tuesday":
    console.log("prepare");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code");
    break;
  case "friday":
    console.log("Chilling");
    break;
  case "saturday":
  case "sunday":
    console.log("chill baby");
}

// function
function logger() {
  console.log("hello ");
}
logger();

function fruit(apples, oranges) {
  console.log(apples, oranges);
  const juice1 = `juice with ${apples} apples and ${oranges} oranges`;
  return juice1;
}
fruit(1, 7);
// return thaye li values levi hoy to ene variable ma store karvi pade
const appleJuice = fruit(4, 9);
console.log(appleJuice);

// jo niche che ae function declaration che
function calcAge1(birthYear) {
  let currentYear = 2024;
  let yourAge = currentYear - birthYear;
  console.log(`Your age is ${yourAge}`);
}
let result = calcAge1(2000);

// ane have function expression che , jema variable ma function store thai jay kind off bkc

const ageOfAltron = function (birthYear) {
  return 2024 - birthYear;
};
console.log(ageOfAltron(2000));

// arrow function

const calcAge2 = (birthYear) => 2024 - birthYear;
const age3 = calcAge2(1990);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age4 = 2024 - birthYear;
  const retirement = 65 - age4;
  // return retirement;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(2002, "Meet"));
