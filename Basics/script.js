"use strict";
// const transactionsEl = document.querySelector(".transactions");
// const balanceNumberEl = document.querySelector(".balance-number");
// const numberIncomeEl = document.querySelector(".number--income");
// const numberExpensesEl = document.querySelector(".number--expenses");
// const formEl = document.querySelector(".form");
// const inputDescriptionEl = document.querySelector(".input--description");
// const inputAmountEl = document.querySelector(".input--amount");

// formEl.addEventListener("submit", function (event) {
//   // prevent default browser
//   event.preventDefault();

//   // get input values
//   const description = inputDescriptionEl.value;
//   const amount = +inputAmountEl.value;

//   // create html
//   const transactionItemHTML = `
//         <li class="transaction transaction--${
//           amount > 0 ? "income" : "expense"
//         }">
//           <span class="transaction__text">${description}</span>
//           <span class="transaction__amount">${
//             amount > 0 ? "+" : ""
//           }${amount}</span>
//           <button class="transaction__btn">X</button>
//         </li>

//   `;

//   // insert HTML to page
//   transactionsEl.insertAdjacentHTML("beforeend", transactionItemHTML);

//   //celar form inputs
//   inputDescriptionEl.value = "";
//   inputAmountEl.value = "";

//   // unfocus input form
//   inputAmountEl.blur();
//   inputDescriptionEl.blur();

//   // update the income or expense
//   if (amount > 0) {
//     const currentIncome = +numberIncomeEl.textContent;
//     const updatedIncome = currentIncome + amount;
//     numberIncomeEl.textContent = updatedIncome;
//   } else {
//     const currentExpenses = +numberExpensesEl.textContent;
//     const updatedExpenses = currentExpenses + amount * -1;
//     numberExpensesEl.textContent = updatedExpenses;
//   }

//   // update balance
//   const income = +numberIncomeEl.textContent;
//   const expense = +numberExpensesEl.textContent;
//   const updatedBalance = income - expense;
//   balanceNumberEl.textContent = updatedBalance;

//   // check if negative balance and make it red
//   if (income - expense < 0) {
//     balanceNumberEl.style.color = "red";
//   }
// });

// function clickHandler(event) {
//   // remove transaction item visually
//   const clickedEl = event.target.parentNode;
//   clickedEl.remove();
//   // update the total after removing the item
//   const amountEl = clickedEl.querySelector(".transaction__amount");
//   const amount = +amountEl.textContent;
//   if (amount > 0) {
//     const currentIncome = +numberIncomeEl.textContent;
//     const updatedIncome = currentIncome - amount;
//     numberIncomeEl.textContent = updatedIncome;
//   } else {
//     const currentExpenses = +numberExpensesEl.textContent;
//     const updatedExpenses = currentExpenses - amount * -1;
//     numberExpensesEl.textContent = updatedExpenses;
//   }

//   // update the main balance
//   const income = +numberIncomeEl.textContent;
//   const expense = +numberExpensesEl.textContent;
//   balanceNumberEl.textContent = income - expense;

//   // check if negative balance and make it red
//   if (income - expense < 0) {
//     balanceNumberEl.style.color = "red";
//   }
// }

// transactionsEl.addEventListener("click", clickHandler);

// this keyword

// const birthyear = 2002;
// const salary = 200;
// const meet = {
//   job: "superstore",
//   salary: 15,
//   birthyear: 2000,
//   calcAge: function () {
//     console.log(2025 - birthyear);
//   },
//   greetArr: () => {
//     console.log(this.salary);
//   },
//   greetMethod: function () {
//     console.log(this.salary);
//   },
// };
// meet.calcAge();
// meet.greetArr();
// meet.greetMethod();

// array destructuring

let Meet = 5000;
let Manan = 10000;
[Meet, Manan] = [Manan, Meet];
console.log(Meet);

const restaurant = {
  name: "Punjab da tadka",
  location: "Dholka",
  categories: ["veg", "Non-veg", "Italian", "Pizzethisria"],
  starter: ["Manchurian", "Harabhara kabab", "Soup", "Pizza"],
  mainMenu: ["Dalbhat", "shak", "rotli", "mohanthal"],
  openingHours: {
    mon: {
      open: 10,
      close: 22,
    },
    tue: {
      open: 10,
      close: 22,
    },
    wed: {
      open: 10,
      close: 22,
    },
  },

  order: function (starterInd, mainInd) {
    return [this.starter[starterInd], this.mainMenu[mainInd]];
  },
};
// console.log(restaurant.order(2, 1));
const { name: naam, location: pata, mainMenu: shuchekhavama } = restaurant;
console.log(naam, pata, shuchekhavama);
const { wed: budhvaar } = restaurant.openingHours;
console.log(budhvaar);

// the spread operator
const arr = [1, 2, 3, 4];
const newArr = [99, 22, 33, ...arr];
console.log(newArr);

// The REST patterns
// the opposite of spread operator
// it will be on left side of assignment operator
// the rest patterns takes multiple values and packs them into one Array

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
const x = [10, 20, 10];
add(...x);
add(1, 2, 3, 4, 5);
add(2, 3, 1);
