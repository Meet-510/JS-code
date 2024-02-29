// let Person = function (fname, age) {
//   this.firstName = fname;
//   this.birthYear = age;
// };

// let meet = new Person("meet", 2002);
// let rahul = new Person("rahul", 2000);

// // prototypes
// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };
// meet.calcAge();
// rahul.calcAge();

// Person.prototype.species = "Homo sepiens";
// Person.prototype.nationality = "Indian";

// console.log(meet.__proto__);
// console.dir(Person.prototype.constructor);
// let arr = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 5, 5, 6];
// // console.log(arr.concat());

// // now we can add methods to array like Array.length()
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());
// let newArr = ["meet", "meet", "Vijaybhai", "Meet"];
// console.log(newArr.unique());

// challenge 1////////////////////////////////////////////////////////////////////
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function (acc) {
//   console.log(this.speed + 10);
// };
// Car.prototype.break = function (brk) {
//   console.log(this.speed - 10);
// };

// let bmw = new Car("BMW", 120);
// let mercedes = new Car("Mercedes", 95);

// bmw.accelerate();
// mercedes.accelerate();
// bmw.break();
// mercedes.break();

// let tata = new Car("TATA", 500);
// tata.accelerate();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// classes in js ######################################################################################3

//  class expresion
// let newClass = class {};

// class declaration

// class newClass{

// }

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

// now adding methods like function
// Car.prototype.break = function (brk) {
//       console.log(this.speed - 10);
//      };

//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }

//   //   now we can apply setter method to chechk if the name contains the space or not
//   set fullName(name) {
//     if (name.includes(" ")) {
//       return (this.fullName = name);
//     } else {
//       alert(` ${name}enter full name `);
//     }
//   }
//   get fullName() {
//     console.log(this.fullName);
//   }
// }
// let perspn1 = new PersonCl("Meet", 2002);

// console.log(perspn1.birthYear);
// perspn1.calcAge();

// // we can also add methods outside class
// PersonCl.prototype.greet = function () {
//   console.log(` ${this.firstName} rano rana ni rite hooo`);
// };

// // perspn1.greet();
// perspn1.full

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// object.create //////////////////////////////////
// const PersonProto = {
//   init(firstname, birthYear) {
//     this.firstName = firstname;
//     this.birthYear = birthYear;
//   },
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },
// };
// let raju = Object.create(PersonProto);
// raju.init("meet", 2002);
// console.log(raju);
// raju.calcAge();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// challenge #2////////////////////////////////
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function (acc) {
//   console.log(this.speed + 10);
// };
// Car.prototype.break = function (brk) {
//   console.log(this.speed - 10);
// };

// let bmw = new Car("BMW", 120);
// let mercedes = new Car("Mercedes", 95);

// bmw.accelerate();
// mercedes.accelerate();
// bmw.break();
// mercedes.break();

// let tata = new Car("TATA", 500);
// tata.accelerate();
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     console.log(
//       `${this.make} is going at ${this.speed + 100} km/h aftre accelerater`
//     );
//   }
//   break() {
//     console.log(`${this.make} is going at ${this.speed - 10} km/h after break`);
//   }
//   get speedUs() {
//     return this.speed / 1.6;
//   }
// }
// const ford = new CarCl("ford", 220);
// ford.accelerate();
// console.log(ford.speedUs);

////////////////////////////////////////////////////Creating chain of function prototype (inheritance)

// FUNCTION INHERITANCE
// let Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// // prototypes persons method
// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// Person.prototype.inrto = function () {
//   console.log(
//     ` Hey ${this.firstName} , this is from prototype of Person function , and called from Student `
//   );
// };
// now we inherit the properties of Person function from Student function

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// let meet = new Student("Meet", 2000, " CE");
// meet.inrto();
// meet.calcAge();

/////////////////////////////////////////////////////////////////Challlenge 3///////////////////////

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function (acc) {
//   console.log(
//     `${this.make} is going at ${this.speed + 100} km/h aftre accelerater`
//   );
// };
// Car.prototype.break = function (brk) {
//   console.log(`${this.make} is going at ${this.speed - 10} km/h after break`);
// };

// let EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge;
// };
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.ChargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// let tesla = new EV("Tesla ", 200, 90);
// tesla.ChargeBattery(99);
// console.log(tesla);
// tesla.break();

// CLASS INHERITANCE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   get age() {
//     return 2024 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a fill name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(firstName, birthYear, course) {
//     super(firstName, birthYear);
//     this.course = course;
//   }
//   intro() {
//     console.log(
//       ` Hey, my name is ${this.firstName} and i study ${this.course} `
//     );
//   }
//   calcAge() {
//     console.log(5555 - this.birthYear);
//   }
// }
// let martha = new StudentCl("Martha Mistry", 2000, "C S");
// console.log(martha);
// martha.fullName;
// // console.log(martha.fullName)
// martha.intro();
// martha.greet();
// martha.calcAge();

// OBJECT INHERITANCE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const PersonProto = {
//   init(firstname, birthYear) {
//     this.firstName = firstname;
//     this.birthYear = birthYear;
//   },
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },
// };
// // let meet = Object.create(PersonProto);
// // meet.init("meet", 999);
// // console.log(meet);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init.call = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear, course);
//   this.course = course;
// };

// StudentProto.courseName = function () {
//   console.log(this.birthYear);
// };
// const student1 = Object.create(StudentProto);
// student1.init("meet", 9999, "c s");
// console.log(student1);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype.intro = function () {
//   console.log(
//     `Hey there ..... My name is ${this.firstName} and my course is ${this.birthYear}`
//   );
// };
// let meet = new Student("meet", 2002, "cs");
// meet.intro();

// let Person = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// let StudentProto = Object.create(Person);
// StudentProto.intro = function (firstName, birthYear, course) {
//   Person.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.hello = function () {
//   console.log(
//     `Helloo bhaio, maru nam ${this.firstName} che , ane maro course ${
//       this.course
//     } che , mari umar ${2024 - this.birthYear}`
//   );
// };

// let student1 = Object.create(StudentProto);
// student1.init("meet", 2000, "CE");
// student1.hello();
// student1.intro();

class acc {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
  }
  deposite(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposite(-val);
  }
}
let acc1 = new acc("meet", "rup", 69);
acc1.deposite(69);
acc1.deposite(999);
acc1.deposite(6912);
acc1.deposite(223);
acc1.withdraw(555);
