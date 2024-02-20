///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/
const game = {
  team1: "Dholka kings",
  team2: "Chaloda kings",
  players: [
    [
      "Meet",
      "Raju",
      "babu",
      "Kanji",
      "Shubham",
      "Madhav",
      "Rahul",
      "lalu",
      "montu",
      "hari",
      "yogi",
    ],
    [
      "Kunj",
      "nisarg",
      "Anand",
      "Raval",
      "Darshan",
      "Spandan",
      "Neelu",
      "Raj",
      "Parth",
      "Kartik",
      "Bhavya",
    ],
  ],
  score: "4:0",
  scored: ["Meet", "Meet", "Kanji", "Bhavya"],
  date: "20 February, 2024",
  odds: {
    team1: 1.33,
    x: 3.35,
    team2: 6.5,
  },
};

//   1

for (let [key, value] of game.scored.entries()) {
  console.log(`Goal ${key + 1} : ${value}`);
}

// 2
let average = 0;
for (let j of Object.values(game.odds)) {
  average = average + j;
  average = average / 3;
}
console.log(`The average is  ${average}`);

// 3

for (let [teamX, oddX] of Object.entries(game.odds)) {
  const teamStr = teamX === "x" ? "draw" : ` victory ${game[teamX]}`;
  console.log(`odd of ${teamStr} ${oddX}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
