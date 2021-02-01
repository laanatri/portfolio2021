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
// var modalContent = document.querySelector(".modal-content");

const modalSurf = document.getElementById("myModalSurf");
const modalWelina = document.getElementById("myModalWelina");
const modalAtre = document.getElementById("myModalAtre");
const modalComponents = document.getElementById("myModalComponents");
const modalAnimations = document.getElementById("myModalAnimations");
const modalVectoriels = document.getElementById("myModalVectoriels");
const modalPictos = document.getElementById("myModalPictos");

console.log(modalSurf);
console.log(modalWelina);
console.log(modalAtre);
console.log(modalComponents);
console.log(modalAnimations);
console.log(modalVectoriels);
console.log(modalPictos);

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

const btnModalSurf = document.querySelector(".card-surf .btn-modal");
const btnModalWelina = document.querySelector(".card-welina .btn-modal");
const btnModalAtre = document.querySelector(".card-atre .btn-modal");
const btnModalComponents = document.querySelector(".card-components .btn-modal");
const btnModalAnimations = document.querySelector(".card-animations .btn-modal");
const btnModalVectoriels = document.querySelector(".card-vectoriels .btn-modal");
const btnModalPictos = document.querySelector(".card-pictos .btn-modal");

console.log(btnModalSurf);
console.log(btnModalWelina);
console.log(btnModalAtre);
console.log(btnModalComponents);
console.log(btnModalAnimations);
console.log(btnModalVectoriels);
console.log(btnModalPictos);


// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];



const btnCloseSurf = modalSurf.querySelector(".close");
const btnCloseWelina = modalWelina.querySelector(".close");
const btnCloseAtre = modalAtre.querySelector(".close");
const btnCloseComponents = modalComponents.querySelector(".close");
const btnCloseAnimations = modalAnimations.querySelector(".close");
const btnCloseVectoriels = modalVectoriels.querySelector(".close");
const btnClosePictos = modalPictos.querySelector(".close");



console.log(btnCloseSurf);
console.log(btnCloseWelina);
console.log(btnCloseAtre);
console.log(btnCloseComponents);
console.log(btnCloseAnimations);
console.log(btnCloseVectoriels);
console.log(btnClosePictos);

// When the user clicks on the button, open the modal
// btn.onclick = () => {
//   modal.style.display = "flex";
//   modal.classList.add("modal-active");
// }

const openModal = (btn, modal) => {
  btn.onclick = () => {
    modal.style.display = "flex";
    modal.classList.add("modal-active");
  }
}

openModal(btnModalSurf, modalSurf);
openModal(btnModalWelina, modalWelina);
openModal(btnModalAtre, modalAtre);
openModal(btnModalComponents, modalComponents);
openModal(btnModalAnimations, modalAnimations);
openModal(btnModalVectoriels, modalVectoriels);
openModal(btnModalPictos, modalPictos);

// When the user clicks on <span> (x), close the modal
// span.onclick = () => {
//   modal.style.display = "none";
//   modal.classList.remove("modal-active");

// }

const closeModal = (close, modal) => {
  close.onclick = () => {
    modal.style.display = "none";
    modal.classList.remove("modal-active");
  }
}

closeModal(btnCloseSurf, modalSurf);
closeModal(btnCloseWelina, modalWelina);
closeModal(btnCloseAtre, modalAtre);
closeModal(btnCloseComponents, modalComponents);
closeModal(btnCloseAnimations, modalAnimations);
closeModal(btnCloseVectoriels, modalVectoriels);
closeModal(btnClosePictos, modalPictos);

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }






// const btnCloseSurf = document.querySelector(".card-surf .close");

// const btnCloseWelina = document.querySelector(".card-weilna .close");

// const modaleAtre = document.getElementById("myModalAtre");
// const btnModalAtre = document.querySelector(".card-atre .btn-modal");
// const btnCloseAtre = document.querySelector(".card-atre .close");

const blockScroll = (btnModal, btnClose) => {
  btnModal.addEventListener('click', () => {
    const scrolll = window.scrollY;

    const nav = document.querySelector(".navbar");
    nav.style.display = 'none';
    console.log(nav);

    const scrollling = () => {
      window.scrollTo(0, scrolll);
      
    };


    window.addEventListener('scroll', scrollling);

    btnClose.addEventListener('click', () => {

      window.removeEventListener('scroll', scrollling);
      nav.style.display = 'flex';
      
    })

  })
}

blockScroll(btnModalSurf, btnCloseSurf);
blockScroll(btnModalWelina, btnCloseWelina);
