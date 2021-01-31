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

const navItems = document.querySelectorAll(".nav-item");
console.log(navItems);

const eventMenuClick = () => {
  navItems.forEach( (navItem) => {
    navItem.addEventListener('click', () => {
    console.log("clickkkkk");
    bouton.click();
    });
  });
};

const menu = () => {
  eventMenu();
  eventMenuClick();
}

menu();
//FiN NAVBAR

//NAV SCROLLING

// const scrollTo = (to, duration) => {
//   console.log(to);
//   console.log(duration);
//   console.log("fin");

//   // document.body.scrollTop = to;



//   // if (document.body.scrollTop == to) return;



//   let diff = to - document.body.scrollTop;
//   let scrollStep = Math.PI / (duration / 10);
//   let count = 0, currPos;


//   // start = window.pageYOffset;
//   start = element.scrollTop;


//   scrollInterval = setInterval(function(){
//       if (document.body.scrollTop != to) {
//           count = count + 1;
//           currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
//           document.body.scrollTop = currPos;
//       }
//       else { clearInterval(scrollInterval); }
//   },10);
// };

// const test = (elID) => {
//   console.log(elID);
//   let dest = document.getElementById(elID);
//   console.log(dest);
//   scrollTo(dest.offsetTop, 2000);
// };

//FIN NAV SCROLLING


//MODAL

// Get the modal
var modal = document.getElementById("myModalSurf");
var modalContent = document.querySelector(".modal-content");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = () => {
  modal.style.display = "flex";
  modal.classList.add("modal-active");
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
  modal.classList.remove("modal-active");

}

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


const modale = document.getElementById("myModalSurf");
console.log(modale);

const btnModal = document.querySelector(".btn-modal");
const btnClose = document.querySelector(".close");





btnModal.addEventListener('click', () => {
  const scrolll = window.scrollY;
  const scrollling = () => {
    window.scrollTo(0, scrolll);
  };
  window.addEventListener('scroll', scrollling);
  btnClose.addEventListener('click', () => {
    console.log("btn!");
    window.removeEventListener('scroll', scrollling);
  })
})
