// first API call
// let countries = function (country) {
//   const btn = document.querySelector(".btn-country");
//   const countriesContainer = document.querySelector(".countries");

//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     let [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = ` <article class="country">
//   <img class="country__img" src="${data.flags.svg}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${data.population}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages.hin}</p>
//      <p class="country__row"><span>💰</span>${22}</p>
//   </div>
// </article> `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// countries("bharat");
// countries("usa");
// data.currencies.INR.name
// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// // Adding neighbour countries

// let getCountryNeighbour = function (country) {
//   //   ajax call country one
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     let [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // rendering country one
//     renderCountry(data);

//     // get neighbour country 2
//     const neighbour = data.borders?.[0];

//     // ajax call 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       let [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, "neighbour");
//     });
//   });
// };
// // getCountryNeighbour("bharat");
// getCountryNeighbour("usa");
// getCountryNeighbour("bharat");
// // data.flags.png
// setTimeout(() => {
//   console.log("1 second pass");
//   setTimeout(() => {
//     console.log("1 second pass");
//     setTimeout(() => {
//       console.log("1 second pass");
//       setTimeout(() => {
//         console.log("1 second pass");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// promises ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data) {
  const html = `
<article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
    <p class="country__row"><span>💰</span>${data.currencies.INR.name}</p>
  </div>
</article>
`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// let getCountryData = function (data) {
//   fetch(`https://restcountries.com/v3.1/name/${data}`)
//     .then(function (response) {
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//       // country 2
//       const neighbour = data[0].borders?.[0];
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountry(data, "neighbour");
//     })
//     .catch(function (err) {
//       console.log(`${err} error avi che bhai`);
//       renderError(`Somthig is wrong, ${err.message}. Try again`);
//     })
//     .finally(function () {
//       countriesContainer.style.opacity = 1;
//     });
// };
// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText("beforeend", msg);
//   countriesContainer.style.opacity = 1;
// };
// btn.addEventListener("click", function () {
//   getCountryData("bharat");
// });

// challenge 1
// reverse geocoding

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };
// whereAmI(23.033863, 72.585022);

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lottery draw is happening");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve(`You WIN😒😒`);
//     } else {
//       reject(new Error(`You lost your money`));
//     }
//   }, 2000);
// });
// lotteryPromise
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(2)
//   .then(() => {
//     console.log(`i waited for 2 Second`);
//     return wait(1);
//   })
//   .then(() => console.log(" i waited for 1 second"));

// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (err) => console.error(err)
// );
// console.log("Getting Position");

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector(".images");

// let cerateImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.src = imgPath;
//     img.addEventListener("load", function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener("error", function () {
//       reject(new Error("image not found"));
//     });
//   });
// };
// let currentImage;
// cerateImage("img-1.jpg")
//   .then((img) => {
//     currentImage = img;
//     console.log("img 1 loaded");
//     return wait(3);
//   })
//   .then(() => {
//     currentImage.style.display = "none";
//     return cerateImage("img-2.jpg");
//   })
//   .then((img) => {
//     currentImage = img;
//     console.log("img 2 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = "none";
//     return cerateImage("img-3.jpg");
//   })
//   .then((img) => {
//     currentImage = img;
//     console.log("img 3loaded");
//     return wait(2);
//   })
//   .catch((err) => console.error(err));

const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};
whereAmI("usa");
console.log("first");
