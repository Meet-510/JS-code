'use strict';
// //creating and inserting elements
const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookie for better experiance ';
// message.innerHTML =
//   'we use cookies to improve user experiance <button class = "btn btn--close-cookie">Got it!</button>';

// let header = document.querySelector('.header');
// header.prepend(message);

// // header.append(message.cloneNode(true));
// // header.before(message);
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });
// Style
message.style.backgroundColor = 'black';
message.style.width = '120%';
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// attribute
// let logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// logo.alt = 'MCBC';
// logo.setAttribute('company', 'bankist');
// console.log(logo.getAttribute('src'));

// data attribute
console.log(logo.dataset.versionNumber);

let btnScrollTo = document.querySelector('.btn--scroll-to');
let section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  // let s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log(window.pageXOffset, pageYOffset);
  // console.log(
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  // scrolling//////////////////////////////
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left :s1coords.left + window.pageXOffset,
  //   top:s1coords.top + window.pageYOffset,
  //   behavior : "smooth";
  // });
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

// let h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//   // h1.innerHTML = 'hello ';
//   alert('just another method');
// });

// if you want to listen an event for once then do this

// let h1alert = function () {
//   alert('hey mothefaka');
//   h1.removeEventListener('mouseenter', h1alert);
// };

// h1.addEventListener('mouseenter', h1alert);

// let create random color generator
// let randomInt = function (min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// let randomColor = function () {
//   return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// };

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// page navigation/////////////////////////////
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     let id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// let do the same by event delegation
// 1 add event listener to common parent element
// 2 Determine which element originated the value
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    let id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

let h1 = document.querySelector('h1');

// going into children || selecting child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.children);
console.log(h1.childNodes);
h1.firstElementChild.style.color = 'white';

// selecting parent
console.log('meet');
console.log(h1.parentElement);
console.log(h1.parentNode);
// h1.closest('.header').style.background = 'pink';

// Selection of siblings
// so we can only select one sibiling
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// selecting the parent by childNodes
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    // el.style.transform = 'scale(0.5)';
  }
});

// 3 button valu box jema text badlay che click event par
let tabs = document.querySelectorAll('.operations__tab');
let tabsContainer = document.querySelector('.operations__tab-container');
let tabsContent = document.querySelectorAll('.operations__content');

// now selecting the parent element
tabsContainer.addEventListener('click', function (e) {
  let clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // gaurd claues
  if (!clicked) return;
  // active tab remove
  tabs.forEach(function (t) {
    t.classList.remove('operations__tab--active');
  });
  // active added
  clicked.classList.add('operations__tab--active');

  // activate content area

  // remove active tab
  tabsContent.forEach(function (c) {
    c.classList.remove('operations__content--active');
  });
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
// Menu fade animation
// we should do event delegation
let nav = document.querySelector('.nav');

let handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    let link = e.target;
    let sibilings = link.closest('.nav').querySelectorAll('.nav__link');
    let logo = link.closest('.nav').querySelector('img');

    sibilings.forEach(function (el) {
      if (el !== link) {
        el.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});
// nav.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     let link = e.target;
//     let sibilings = link.closest('.nav').querySelectorAll('.nav__link');
//     let logo = link.closest('.nav').querySelector('img');

//     sibilings.forEach(function (el) {
//       if (el !== link) {
//         el.style.opacity = 1;
//       }
//     });
//     logo.style.opacity = 1;
//   }
// });

// sticky navigation

// let initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function () {
//   // console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// sticky navigation: intersection observer

const header = document.querySelector('.header');

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-90px',
});
headerObserver.observe(header);

// reveal sections
const allSection = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
  } else {
    entry.target.classList.add('section--hidden');
  }
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.3,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// lazy loading images
let imgTargets = document.querySelectorAll('img[data-src');

let loadimg = function (entries, observer) {
  let [entry] = entries;
  if (!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

let imgObserver = new IntersectionObserver(loadimg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach(function (img) {
  imgObserver.observe(img);
});

// /////////////////////////////////////////////////////////
// slider
let btnRight = document.querySelector('.slider__btn--right');
let btnLeft = document.querySelector('.slider__btn--left');
let curSlide = 0;

console.log('new');
let slides = document.querySelectorAll('.slide');
slides.forEach(function (s, i) {
  s.style.transform = `translateX(${100 * i}%)`;
});
let slider = document.querySelector('.slider');
slider.style.overflow = 'visible';

// next slide
let maxSlide = slides.length;

let goToSlide = function (slide) {
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
};

let nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

let prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  nextSlide(curSlide);
};
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
