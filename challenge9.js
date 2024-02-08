// Convert array into String
let data1 = [22, 33, 44, 55];
let data2 = [44, 33, -3, 55, 66];

function printForcast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `. . .${arr[i]} Celsius temp in ${i + 1} days  `;
  }
  console.log(str);
}
printForcast(data1);
