//NAVBAR
// const categoryAppear = () => {
//   console.log("hello three");
//   const categories = document.querySelectorAll(".nav-link");
//   console.log(categories);
//   categories.forEach ( (category) => {
//     category.setAttribute("data-aos", "flip-left");
//   })
// }

// const categoryAppear = (delay, cat) => {
//   setTimeout((delay) => {
//     const category = document.querySelector(cat)
//   }, (delay))

// }

// const menu = () => {
//   const bouton = document.querySelector(".navbar-toggler");
//   bouton.addEventListener('click', () => {
//     console.log("hello");
//     setTimeout( () => {
//       console.log("hello two")
//       categoryAppear();
//     }, (500));
//   })
// }

// menu();

// console.log("lala");


//FOND NAVBAR
const bouton = document.querySelector(".navbar-toggler");

const fond = () => {
  setTimeout( () => {
      const nav = document.querySelector(".navbar");
      nav.classList.toggle("navbar-white");
    }, 100)
    console.log("fond");
}

const btnAnim = () => {
  bouton.classList.toggle("btn-actif");
  console.log("btnAnim");
}

const eventMenu = () => {
  bouton.addEventListener('click', () => {
    console.log("Menu");
    fond();
    btnAnim();
  })
}

const menu = () => {
  eventMenu();
}

menu();
