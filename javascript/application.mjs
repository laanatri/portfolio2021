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

const eventMenu = () => {
  const bouton = document.querySelector(".navbar-toggler");
  bouton.addEventListener('click', () => {
    console.log("Menu");
    const nav = document.querySelector(".navbar");
    setTimeout( () => {
      nav.classList.toggle("navbar-white");
    }, 100)
  })
}

const menu = () => {
  eventMenu();
}

menu();
