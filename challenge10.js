// Destructuring Arrays and Objects
// destructure Arrays use[]
"use strict";

let restaurant = {
  name: "panjab da tadka",
  location: "Shakto Society Dholka",
  category: ["italian", "Gujarati", "punjabi", "south indian"],
  starterMenu: ["manchurian", "kabab", "soup"],
  mainMenu: ["lentils", "Indian bread", "vegitable curry", "curd"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openigHours: {
    thu: {
      open: 10,
      close: 10,
    },
    fri: {
      open: 11,
      close: 12,
    },
    sat: {
      open: 99,
      close: 89,
    },
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received !! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },
  oredrPasta: function (ing1, ing2, ing3) {
    console.log(`Here is you's pasta with ${ing1} , ${ing2} and ${ing3}`);
  },
  // for the use of REST and SPREAD properties
  orderPunjabi: function (mainItem, ...otherItems) {
    console.log("here is the main food", mainItem);
    console.log("rest order is this ", ...otherItems);
  },
};

restaurant.orderPunjabi(
  "paneer buttur masala",
  "chees naan",
  "mix veg",
  "gobi manchurian",
  "papad"
);

restaurant.orderDelivery({
  time: "22:00",
  address: "Shakti Society",
  starterIndex: 1,
  mainIndex: 2,
});

let [first, second] = restaurant.category;
console.log(first, second);
console.log(restaurant.order(0, 2));

let [starterFood, mainFood] = restaurant.order(1, 2);
console.log(starterFood, mainFood);

// nested destructuring
let arr = [1, 2, 3, [9, 8]];
let [i, , , [j, k]] = arr;
console.log(i, j, k);

// default values

let arr1 = [1, 2, 3];
let [p = 1, o = 1, u = 1, y = 69] = arr1;

console.log(p, o, u, y);

// destructuring Objects use{}

let { name, openigHours, starterMenu } = restaurant;
console.log(name, openigHours, starterMenu);

let { name: nameresto, openigHours: kalak, starterMenu: jamvanu } = restaurant;
console.log(nameresto, kalak, jamvanu);

// mutating variable
let a = 10;
let b = 30;
let obj = { a: 99, b: 66, c: 77 };
({ a, b } = obj);
console.log(a, b);

// nested objects

let {
  fri: { open, close },
} = openigHours;
console.log(open, close);

// use of spread operator

let newAdded = [...restaurant.mainMenu, "dal", "bhaat", "kadi", "khichdi"];
console.log(newAdded);

// lets make array for passinf into orderPasta funct

let pasta = [
  prompt("let's make pasta !! Enter ingrediant 1"),
  prompt("Enter ingrediant 2"),
  prompt("Enter ingrediant 3"),
];
restaurant.oredrPasta(...pasta);
