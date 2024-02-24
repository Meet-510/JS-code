// let arr = [0, 1, 2, 3, 4, 5, 6];
// // reverse method actually mutate the original array
// console.log(arr.reverse());
// // slice do not mutate the original array
// console.log(arr.slice(-1));
// console.log([...arr]);
// console.log(arr.slice());

// // splice actually mutate the original array
// console.log(arr.splice(3, 3));
// console.log(arr);

// // concat
// let arr2 = [66, 77, 888, 999, 9999];
// let concatArr = arr.concat(arr2);
// console.log(concatArr);
// console.log([...arr, ...arr2]);

// // join
// console.log(concatArr.join(" № "));

// let movement = [100, 200, -300, 3000, 1000, -29292, 200000];
// for (let [i, move] of movement.entries()) {
//   if (move > 0) {
//     console.log(` YOu diposted  ${move}`);
//   } else {
//     console.log(`YOu withdrew   ${Math.abs(move)}`);
//   }
// }
// console.log("-----------------------");
// // forEach loop movement.forEach(function (current element, index , array))

// movement.forEach(function (move, index, arr) {
//   if (move > 0) {
//     console.log(`YOu diposted ${index + 1} - ${move}`);
//   } else {
//     console.log(`YOu withdrew   ${Math.abs(move)}`);
//   }
// });

// let students = new Map([
//   [1, "Meet Mistry"],
//   [2, "Madhav"],
//   [3, "Nisarg"],
//   [4, "Anand "],
// ]);

// students.forEach(function (val, ind, arr) {
//   console.log(`Er ${ind} is for ${val}`);
//   console.log("here is entire array", ...arr);
// });

// let newSet = new Set(["USD", "CAD", "USD", "CAD", "IND", "JPD"]);
// newSet.forEach(function (value, key) {
//   console.log(`${key} ${value}`);
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// ?moments
let displayMovements = function (movements) {
  containerMovements.innerHTML = " ";
  ``;
  // .textContent = 0
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
   
    <div class="movements__value">${mov}</div>
</div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

// map mathod is like forEach method but its return new Array
let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// lets convert this euros into us dollar
const eurToUsd = 1.1;
const momentsToUsd = movements.map(function (mov) {
  return Math.trunc(mov * eurToUsd);
  //   return mov;
});
console.log(momentsToUsd);
console.log(movements);

// now lets make new same array with the help of for of loop

// let newArry = [];
// for (let mov of movements) {
//   newArry.push(mov * eurToUsd);
// }
// console.log(newArry);

let movementsDescription = movements.map(function (mov, i, arr) {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${Math.abs(mov)}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});
console.log(movementsDescription);

///////////////////////////////////////////////////////////////////////////
// computing usernames
const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(function (name) {
        return name[0];
      })
      .join("");
  });
};
createUserName(accounts);
console.log(accounts);
// console.log(createUserName("Meet Vijaybhai Mistry"));
// jyare pn tme return karta hov to call karela function ne tamare log karavo pdse
