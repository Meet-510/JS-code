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

// game

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

function max(temp) {
  let max1 = temp[0];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] > max1) {
      max1 = temp[i];
    }
  }
  console.log(max1);
}
max([2, 5, 7, 9, 4, 3, 6, 88, 7, 4]);
