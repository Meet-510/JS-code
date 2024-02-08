// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];
for (let i = 0; i < bills.length; i++) {
  if (bills[i] >= 50 && bills[i] <= 300) {
    let tip = bills[i] / 15;
    tips.push(tip);
    total.push(tip + bills[i]);
    console.log(tips);
    console.log(total);

    console.log(`your bill is ${bills[i]} and tip is ${tip} rupees`);
  } else {
    console.log(`bill is ${bills[i]} and tip is ${bills[i] / 20} rupees`);
  }
}
