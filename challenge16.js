//////////////////////////////////////
// Coding Challenge #16

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/
let dogAge = [5, 2, 4, 1, 15, 8, 3];
let calcAverageHumanAge = function (arr) {
  let humanAge = arr.map(function (age, ind) {
    if (age > 2) {
      return age + 16 * 4;
      console.log(age);
    } else {
      return age * 2;
    }
  });
  console.log(humanAge);
  const filter18Age = humanAge.filter(function (ages) {
    return ages >= 18;
  });
  console.log(` The adult dogs ${filter18Age}`);

  let calcAvgAdult = filter18Age.reduce(function (acc, age) {
    let avg = (acc = acc + age / filter18Age.length);
    return avg;
  });
  console.log(calcAvgAdult);
};
calcAverageHumanAge(dogAge);

// 2
// const filter18Age = humanAge.filter(function (ages) {
//   return `Dog is < 18 years ${ages <= 18}`;
// });
// console.log(filter18Age);
