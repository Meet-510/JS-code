// date 21-2-24 How Passing Arguments Works: Value vs. Reference
////////////////////////////////////////////////////////////////////////////
// let flight = "BMB222";
// let meet = {
//   name: "Meet Mistry",
//   passport: 222333444,
// };

// let check = function (flightName, ...person) {
//   person.name = "Mr " + person.name;

//   if (person.passport === 222333444) {
//     alert(`welcome ${person.name} !! Checked In`);
//   } else {
//     alert("Wrong Passport");
//   }
// };

// check(flight, meet);
// console.log(meet);

// let newFun = function (...person1) {
//   person1.passport = Math.trunc(Math.random() * 22222222222);
// };
// newFun(meet);
// check(flight, meet);

// let newpass = 8888888;
// let nameM = "meet";
// let funnnn = function (pass, name1) {
//   pass = 333333;
//   name1 = "hello";
//   console.log(newpass, nameM);
// };
// funnnn(newpass, nameM);

// console.log(newpass, nameM);

////////////////////////////////////////////////////////////////////////////
// date 21-2-24 . Functions Accepting Callback Functions

// let toLower1 = function (str) {
//   return str.replaceAll(" ", "").toLowerCase();
// };

// let toUpp1 = function (str) {
//   console.log(str[0].toUpperCase() + str.slice(1));
//   //   let [first, ...others] = str.split(" ");
//   //   console.log([first.toUpperCase(), ...others].join(" "));
// };
// toUpp1("meet");
// let transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transfered string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer("javaScript is the best language", toUpp1());

////////////////////////////////////////////////////////////////////////////

// Functions Returning Functions 21-2-24
// let greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// let greeter = greet("hey");
// greeter("meet");
// greet("hello")("Meet");

////////////////////////////////////////////////////////////////////////////
// The call and apply Methods , used for manipulating this keyword (⌒▽⌒)

let airIndia = {
  airline: "AirIndia",
  iatacode: "AI",
  booking: [],
  book: function (flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNumber}`
    );
    this.booking.push({ flight: `${this.iatacode}${flightNumber}`, name });
  },
};
airIndia.book(222, "Meet Mistry");

let vistara = {
  airline: "AirVistara",
  iatacode: "AV",
  booking: [],
};

let book = airIndia.book;
// call methods
book.call(vistara, 23, "vaibhav Mistry");
book.call(airIndia, 99, "Madhav Trivedi");

// apply methods
let flightData = [589, "Meet"];
book.apply(vistara, flightData);
book.call(vistara, ...flightData);

// The bind Method
let bookAV = book.bind(vistara);
bookAV(69, "Sunny Leone");
let bookAI = book.bind(airIndia);
bookAI(6969, "Johnny sins");

// with event handlers
airIndia.planes = 200;
airIndia.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", airIndia.buyPlane.bind(airIndia));
