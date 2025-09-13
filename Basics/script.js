const transactionsEl = document.querySelector(".transactions");
const balanceNumberEl = document.querySelector(".balance-number");
const numberIncomeEl = document.querySelector(".number--income");
const numberExpensesEl = document.querySelector(".number--expenses");
const formEl = document.querySelector(".form");
const inputDescriptionEl = document.querySelector(".input--description");
const inputAmountEl = document.querySelector(".input--amount");

formEl.addEventListener("submit", function (event) {
  // prevent default browser
  event.preventDefault();

  // get input values
  const description = inputDescriptionEl.value;
  const amount = +inputAmountEl.value;

  // create html
  const transactionItemHTML = `
        <li class="transaction transaction--${
          amount > 0 ? "income" : "expense"
        }">
          <span class="transaction__text">${description}</span>
          <span class="transaction__amount">${
            amount > 0 ? "+" : ""
          }${amount}</span>
          <button class="transaction__btn">X</button>
        </li>
       
  `;

  // insert HTML to page
  transactionsEl.insertAdjacentHTML("beforeend", transactionItemHTML);

  //celar form inputs
  inputDescriptionEl.value = "";
  inputAmountEl.value = "";

  // unfocus input form
  inputAmountEl.blur();
  inputDescriptionEl.blur();

  // update the income or expense
  if (amount > 0) {
    const currentIncome = +numberIncomeEl.textContent;
    const updatedIncome = currentIncome + amount;
    numberIncomeEl.textContent = updatedIncome;
  } else {
    const currentExpenses = +numberExpensesEl.textContent;
    const updatedExpenses = currentExpenses + amount * -1;
    numberExpensesEl.textContent = updatedExpenses;
  }

  // update balance
  const income = +numberIncomeEl.textContent;
  const expense = +numberExpensesEl.textContent;
  const updatedBalance = income - expense;
  balanceNumberEl.textContent = updatedBalance;

  // check if negative balance and make it red
  if (income - expense < 0) {
    balanceNumberEl.style.color = "red";
  }
});

function clickHandler(event) {
  // remove transaction item visually
  const clickedEl = event.target.parentNode;
  clickedEl.remove();
  // update the total after removing the item
  const amountEl = clickedEl.querySelector(".transaction__amount");
  const amount = +amountEl.textContent;
  if (amount > 0) {
    const currentIncome = +numberIncomeEl.textContent;
    const updatedIncome = currentIncome - amount;
    numberIncomeEl.textContent = updatedIncome;
  } else {
    const currentExpenses = +numberExpensesEl.textContent;
    const updatedExpenses = currentExpenses - amount * -1;
    numberExpensesEl.textContent = updatedExpenses;
  }

  // update the main balance
  const income = +numberIncomeEl.textContent;
  const expense = +numberExpensesEl.textContent;
  balanceNumberEl.textContent = income - expense;

  // check if negative balance and make it red
  if (income - expense < 0) {
    balanceNumberEl.style.color = "red";
  }
}

transactionsEl.addEventListener("click", clickHandler);
