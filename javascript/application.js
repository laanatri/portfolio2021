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





    ///SWIPPER

    const swipes = modal.querySelector('.swiper-container');



    console.log(swipes);
    
    
    new Swiper(swipes, {
      // Optional parameters
      // If we need pagination
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // And if we need scrollbar
    
    });
  
    
    
    
    const modalSurf = document.getElementById("myModalSurf");
    const bullets = modalSurf.querySelectorAll(".swiper-pagination-bullet");
    
    bullets.forEach((bullet) => {
      bullet.innerHTML = "<i class='fab fa-envira'></i>";
      console.log(bullet);
    })

    const modalAtre = document.getElementById("myModalAtre");
    const bulllets = modalAtre.querySelectorAll(".swiper-pagination-bullet");

    bulllets.forEach((bulllet) => {
      bulllet.innerHTML = "<i class='fas fa-fire'></i>";
    })

    const modalVectoriels = document.getElementById("myModalVectoriels");
    const bullllets = modalVectoriels.querySelectorAll(".swiper-pagination-bullet");

    bullllets.forEach((bullllet) => {
      bullllet.innerHTML = "<i class='fas fa-bezier-curve'></i>";
    })

    const modalPictos = document.getElementById("myModalPictos");
    const bulllllets = modalPictos.querySelectorAll(".swiper-pagination-bullet");

    bulllllets.forEach((bulllllet) => {
      bulllllet.innerHTML = "<i class='fas fa-signature'></i>";
    })

    ///






    const scro = window.scrollY;

    const scrolling = () => {
      window.scrollTo(0, scro);
    }

    window.addEventListener('scroll', scrolling );





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

// const btnSurf = document.querySelector(".myBtnSurf");


// boutonsArr.forEach((bouton) => {
//   bouton.addEventListener(("click") , () => {
//     const indBtn = boutonsArr.indexOf(bouton);


//     const pagination = modals[indBtn].getElementsByTagName("i");
//     const paginationArr = Array.from(pagination);

//     const frames = modals[indBtn].querySelectorAll(".frame-carousel");
//     const framesArr = Array.from(frames);


//     const modalContent = modals[indBtn].querySelector(".modal-cont");

//     const w = modalContent.offsetWidth;
  
//     framesArr.forEach((frame) => {
  
//       frame.style.width = w + "px";
//     })
  

//     const carousel = modals[indBtn].querySelector(".carousel-content");

//     paginationArr.forEach((page) => {
//       page.addEventListener(("click") , () => {

//         paginationArr.forEach((page) => {
//           page.classList.remove("i-actif");
//         })
//         page.classList.add("i-actif");


//         const indPage = paginationArr.indexOf(page);
//         let X = w * indPage;
//         carousel.scrollTo(X, 0);
//       })
//     })
//   })
// })






// CAROUSEL

//////////////////////////////////////////

// NAVI

const navB = document.querySelector(".navbar");
const btnNav = document.querySelector(".btn-nav");



const btnAnim = () => {
  console.log(btnNav);
  btnNav.classList.toggle("btn-actif");
}





btnNav.addEventListener(("click") , () => {


  console.log("nav!!!!");
  navB.classList.toggle("active");
  navB.classList.toggle("inactive");
  btnAnim();

})



const navItems = document.querySelectorAll(".nav-item");
console.log(navItems);

const eventMenuClick = () => {
  navItems.forEach( (navItem) => {
    navItem.addEventListener('click', () => {
    console.log("clickkkkk");
    btnNav.click();
    });
  });
};

eventMenuClick();

// NAVI
