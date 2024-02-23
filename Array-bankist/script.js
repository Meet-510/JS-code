let arr = [0, 1, 2, 3, 4, 5, 6];
// reverse method actually mutate the original array
console.log(arr.reverse());
// slice do not mutate the original array
console.log(arr.slice(-1));
console.log([...arr]);
console.log(arr.slice());

// splice actually mutate the original array
console.log(arr.splice(3, 3));
console.log(arr);

// concat
let arr2 = [66, 77, 888, 999, 9999];
let concatArr = arr.concat(arr2);
console.log(concatArr);
console.log([...arr, ...arr2]);

// join
console.log(concatArr.join(" № "));
