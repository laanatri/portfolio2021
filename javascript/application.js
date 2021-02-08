// IMG VIDEO OK

const card = document.querySelectorAll(".card");
const cardArr = Array.from(card);

const video = document.getElementsByTagName("video");
const videoArr = Array.from(video);

cardArr.forEach((p) => {
  const i = cardArr.indexOf(p);
  if (window.matchMedia("(max-width: 767.99px)").matches) {
    videoArr[i].play();
  } else {
    p.addEventListener('mouseenter', () => {
        videoArr[i].currentTime = 0;
        videoArr[i].play();
    })
  }
})

// IMG VIDEO OK

/////////////////////////////////////////////////////////////////

// MODAL

//Les modales
const modals = document.querySelectorAll(".modal");
const modalsArr = Array.from(modals);

//Les btn open modales
const boutons = document.querySelectorAll(".btn-modal");
const boutonsArr = Array.from(boutons);

//Les btn close modales
const boutonsClose = document.querySelectorAll(".close");
const boutonsCloseArr = Array.from(boutonsClose);

//La nav
const nav = document.querySelector(".navbar");


//fonctions modales

const openModal = (btn, modal) => {
  btn.onclick = () => {
    modal.style.display = "flex";
    nav.style.display = 'none';
    modal.classList.add("modal-active");


    const scro = window.scrollY;
    console.log(scro);

    const scrolling = () => {
      window.scrollTo(0, scro);
    }

    window.addEventListener('scroll', scrolling );


///


    const closeModal = (close, modal) => {
      close.onclick = () => {
        modal.style.display = "none";
        nav.style.display = 'flex';
        modal.classList.remove("modal-active");

        window.removeEventListener('scroll', scrolling );    
      }
    }

    boutonsCloseArr.forEach((bouton) => {
      const ind = boutonsCloseArr.indexOf(bouton);
      closeModal(bouton, modalsArr[ind]);
    })


///


    const otherCloseModal = (modal) => {

      modal.addEventListener('click', () => {
        if (event.target == modal) {
          modal.style.display = "none";
          nav.style.display = 'flex';
          modal.classList.remove("modal-active");

          window.removeEventListener('scroll', scrolling ); 
        }
      })
    }

    modalsArr.forEach((modal) => {
      otherCloseModal(modal);
    })

  }
}

boutonsArr.forEach((bouton) => {
  const ind = boutonsArr.indexOf(bouton);
  openModal(bouton, modalsArr[ind]);
})

// MODAL

////////////////////////////////////////////////////////////////


// CAROUSEL

const btnSurf = document.querySelector(".myBtnSurf");

console.log("lala");
console.log(btnSurf);
console.log("lala");


boutonsArr.forEach((bouton) => {
  bouton.addEventListener(("click") , () => {
    const indBtn = boutonsArr.indexOf(bouton);


    const pagination = modals[indBtn].getElementsByTagName("i");
    const paginationArr = Array.from(pagination);

    const frames = modals[indBtn].querySelectorAll(".frame-carousel");
    const framesArr = Array.from(frames);


    const modalContent = modals[indBtn].querySelector(".modal-cont");

    const w = modalContent.offsetWidth;
  
    framesArr.forEach((frame) => {
  
      frame.style.width = w + "px";
    })
  

    const carousel = modals[indBtn].querySelector(".carousel-content");

    paginationArr.forEach((page) => {
      page.addEventListener(("click") , () => {

        paginationArr.forEach((page) => {
          page.classList.remove("i-actif");
        })
        page.classList.add("i-actif");


        const indPage = paginationArr.indexOf(page);
        let X = w * indPage;
        carousel.scrollTo(X, 0);
      })
    })
  })
})

// CAROUSEL



































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

      const nav = document.querySelector(".navbarFixe");
      nav.classList.toggle("navbar-white");

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
//   console.log(dest);active
//   scrollTo(dest.offsetTop, 2000);
// };

//FIN NAV SCROLLING
