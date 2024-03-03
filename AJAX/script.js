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

// const renderCountry = function (data) {
//   const html = `
// <article class="country">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
//     <p class="country__row"><span>💰</span>${data.currencies.INR.name}</p>
//   </div>
// </article>
// `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

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

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
};
whereAmI(23.033863, 72.585022);
