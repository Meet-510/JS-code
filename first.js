"use strict";

// console.log('hello mother ');
// let a=5;
// let b=7;
// console.log(a+b);
// console.log(a+1)
// let a=10;
// let b=9;
// a-=9;
// console.log(a);

// let number=prompt("enter the number");
// if(number%5===0){
//     console.log("great");

// }
// else{
//     console.log("greetings");
// }

// for(let i=1;i<=50;i++){
//     console.log("jay shree ram");
// }

// let sum=0;
// for(let i=1;i<=5;i++){
//    sum=sum+i;
// }
// console.log(sum)

// example of string literals

// let i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }
// let i=0;
// do{
//     console.log(i);
//     i++
// }while(i<=7);

// let str="jay jay shree ram";
// for(let i of str){
//     console.log(i);
// }

// let student={
//     name:"rahul",
//     er:22,
//     mo:99999,
// };
// for (let key in student){
//     console.log(key,student[key]);
// }

// print all even from 0 to 100

// let num=0;

// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// game
// let gameNum = 69;
// let usNum = prompt("baby please enter your pussy count:");
// // console.log(usNum);

// if(gameNum==usNum){
//     console.log("baby cum na");
// }else{
//     console.log("entered in wrong hole");
// }

// game////////////////////////////////////////////////////////////////////////////

// let gameNum = 69;
// let user=prompt("nakh tari pikki");
// while(gameNum != user){
//     user=prompt(" fari nakh tari pikki, pela khoti hati");
// }
// console.log("have barobr thai");

// Stringmetgods
// let str = "ram ram bhaio";
// console.log(str.replace("haio","H"));

// let un  = prompt("enter the username:");
// // let length = un.length;
// // console.log(`@${un}${length}`);
// arrays

// let erno=[1,2,3,4,5,6,7];
// for(let i=0;i<erno.length;i++){
//     console.log(erno[i]);
// }

// let arr=[34,24,33,42,54,65,76,87,98];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//    sum=sum+arr[i];

// }
// console.log(sum);

// let price=[110,266,777,888,900,776];
// for(let i=0;i<price.length;i++){
//     console.log("value of item",price[i]);
//     let dis= price[i]/10;
//     price[i]=price[i]-dis;
//     console.log("value after offer",price[i]);

// }

// push and pop in array
// let food=["potato","apple","litchi","tomato"];
// food.push("fafda");
// console.log(food.toString);

// adding values at starting using unshift and shift for deleting from first position
// let food=["potato","apple","litchi","tomato"];
// food.unshift("fafda");
// console.log(food);

// let name =["meet","madhav","herry"];
// let surname=["mistry","trivedi","dalit"];
// let new1 = name.concat(surname);
// console.log(new1);

// let arr=[1,2,3,4,5,6];
// arr.splice(2,2,22,33,44,55,66,77);

// let digit= 1;
// switch(digit){
//     case 1:
//         console.log("this is one");
//         break;

// }

// function calcAge(age){

//     let year=2024-age;
//     return year;
//     // console.log(year);
// }
// function age(birthYear){
//     let age=calcAge(birthYear)

// }
// age(2009);

// let years = [2002,2000,1999,1998,1997,1992];
// for( let i=0;i<years.length;i++){
//     console.log(calcAge(years[i]));
// }
// methods of array
// let name = ['meet','madhav','rahul','raju'];
// name.push('mahir');
// name.unshift('jakky');
// name.pop();
// name.shift();
// console.log(name.indexOf('raju'));
// console.log(name.includes('raju'));

// console.log(name);

// calling function in object
// let meet = {
//     firstName : 'meet',
//     lastName :'mistry',
//     birthYear : 2002,
//     job : 'unemployed',
//     friends : ['madhav','nisarg','anand'],
//     driverLicence : true,

//     licence :function(){
//         if(this.driverLicence){
//             return `${this.firstName}has a drivers licence`;
//         }else{
//             return `${this.firstName}has not drivers licence`;
//         }
//     },
//     calcAge :function(){
//         // console.log(this);
//         this.age= 2024 - this.birthYear;
//         console.log(`Meet is ${this.age} - years old ${this.job} , ${this.licence()}`);

//     }
// }
// console.log(meet.calcAge());

// let years = [2002,2006,2007,2000,1999];
// let age = [];
// for(let i=0;i<years.length;i++){
//     //  age.push(2024 - years[i]);
//     age[i]=2024- years[i];

// }
// console.log(age);

// loop Elements in back || reverse looping

// let back =[1,2,3,4,5,6,7,8];
// console.log(back);

// for(let i=back.length-1;i>=0;i--){
//     console.log(back[i]);
// }

// maximum from array
// let list = [2, 5, 7, 9, 4, 3, 6, 88, 7, 4];
// let max;
// for (i = 0; i < list.length; i++) {
//   if (list[i] > max) {
//     max = list[i];
//   }
//   console.log(max);
// }

// function max(temp) {
//   let max1 = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i] > max1) {
//       max1 = temp[i];
//     }
//   }
//   console.log(max1);
// }
// max([2, 5, 7, 9, 4, 3, 6, 88, 7, 4]);

// spread operator
// only works on ityerable : Strings Arrays Map Set NOT Objects
// let arr = [1, 2, 3, 4, 5];
// let newArr = [99, 88, 77, ...arr];
// console.log(arr, newArr);
// console.log(newArr[5]);

// let names = ["meet", "raju", "shyam", "piki", "meetiii"];
// console.log(...names);

// let my = "meet";
// let her = "sofy";
// let merge = [...my, ...her];
// console.log(...merge);

// // REST operator works opposite of spread operator
// // if you want any number of parameters then we can use REST

// let [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(others);

// let funNew = function (...numbers) {
//   let digit = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     digit = digit + numbers[i];
//   }
//   console.log(digit);
// };
// funNew(1, 2, 3);
// funNew(44, 55, 66, 77, 88, 44);
// funNew(8);

// // passing array into function with help of spread and rest operators
// let x = [1, 2, 77, 88, 33, 123468];
// funNew(...x);

// let rest1 = {
//   name: "panjab da tadka",
//   ownerName: "raju babu",
// };
// let rest2 = {
//   name: "ShreeNathjii",
//   customers: 200,
// };
// rest1.customers = rest1.customers || 6969;
// rest2.customers = rest2.customers || 6969;
// console.log(rest1);
// console.log(rest2);

////////////////////////////////////////////////////////////////////////////
// 20-2-24
// let restaurant = {
//   name: "panjab da tadka",
//   location: "Shakto Society Dholka",
//   category: ["italian", "Gujarati", "punjabi", "south indian"],
//   starterMenu: ["manchurian", "kabab", "soup"],
//   mainMenu: ["lentils", "Indian bread", "vegitable curry", "curd"],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   openigHours: {
//     thu: {
//       open: 10,
//       close: 10,
//     },
//     fri: {
//       open: 11,
//       close: 12,
//     },
//     sat: {
//       open: 99,
//       close: 89,
//     },
//   },
//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Order received !! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
//     );
//   },
//   oredrPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is you's pasta with ${ing1} , ${ing2} and ${ing3}`);
//   },
//   // for the use of REST and SPREAD properties
//   orderPunjabi: function (mainItem, ...otherItems) {
//     console.log("here is the main food", mainItem);
//     console.log("rest order is this ", ...otherItems);
//   },
// };

// let menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (let i of menu.entries()) {
//   console.log(i);
// }

// for (let day of Object.keys(restaurant.openigHours)) {
//   console.log(day);
// }
// let properties = Object.keys(restaurant.openigHours);
// console.log(properties);

// let str = `we are open at `;

// for (let i of Object.keys(restaurant.openigHours)) {
//   str = str + `${i} `;
// }
// console.log(str);

// let entries = Object.entries(restaurant.openigHours);

// for (let [key, { open, close }] of entries) {
//   console.log(`on ${key}, we open at ${open} and close at ${close} .`);
// }

// sets 20 2 24 best use of SET is to remove duplicate from Array

// let sets = new Set([2, 3, "raju", "meet", 56, 7, 8, 8]);
// console.log(sets);
// console.log(sets.size);
// console.log(sets.has(0));
// sets.add("sunny leone", "rehu");
// console.log(sets);
// sets.delete("sunny leone");

// // best use of SET is to remove duplicate from Array
// let hotel = ["waiter", "customer", "waiter", "manager", "security", "waiter"];
// let hotelSet = [...new Set(hotel)];
// console.log(hotel, hotelSet);

// let str = "meet mistry";
// console.log(...str);

////////////////////////////////////////////////////////////////////////////
// // maps 20 2 24

// let rest = new Map();
// rest.set("name", "Punjab Da Tadka");
// rest.set("Genre", "Family Resto");
// rest.set(1, "Malav Talab");
// rest.set(2, "Chikli talab");
// console.log(rest);
// rest
//   .set("mainMenu", ["lentils", "Indian bread", "vegitable curry", "curd"])
//   .set("open", 11)
//   .set("close", 18)
//   .set(true, "We are open :)")
//   .set(false, "We are closed :(");
// console.log(rest);
// // console.log(rest.get(true));

// const time = 19;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// rest.set(document.querySelector("h1"), "heading");

// Working with String 21-2-24 ////////////////////////////////////////////////////////////////////////////

// let str = "meet Mistry";
// let add = "shakti Society , Maghiya ROAD";
// let newS = add.split(",");
// console.log(newS);
// let me = ["Mr.", str.toLowerCase(), add.toLowerCase()].join(" ");
// console.log(me);

// let debit = function (numb) {
//   let num = String(numb);
//   let newNum = num.slice(-4);
//   let pad = newNum.padStart(num.length, "$");
//   console.log(pad);
// };
// debit(12345678);

// let planeFN = function (n) {
//   console.log(
//     `Owing to bad weather there are ${n} planes are waiting ${"✈️".repeat(n)}`
//   );
// };
// planeFN(6);
// planeFN(9);

// 21-2-24//////////////////////////////////////////////////////////////////////////
// String
///////////////////////////////////////
// String Methods Practice

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// for (let str of flights.split("+")) {
//   let [type, fromm, to, time] = str.split(";");
//   let output = ` ${type.startsWith("_Delayed") ? "🔴" : " "}
//   ${type.replaceAll("_", " ")} from  ${fromm.slice(0, 3).toUpperCase()}  to ${to
//     .slice(0, 3)
//     .toUpperCase()} (${time.replace(":", "h")}) `;
//   console.log(output);
// }
