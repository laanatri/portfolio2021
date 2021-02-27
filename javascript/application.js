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
  
    ///SWIPPER

    ///MODAL
    
    
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
});

// MODAL



// NAVI

const navB = document.querySelector(".navbar");
const btnNav = document.querySelector(".btn-nav");


const btnAnim = () => {
  console.log(btnNav);
  btnNav.classList.toggle("btn-actif");
}


btnNav.addEventListener(("click") , () => {
  console.log("nav!!!!");

  console.log(document.querySelector(".dark-mode-on"));

  if (document.querySelector(".dark-mode-on") != null) {
    console.log("dark");
    navB.classList.toggle("active-dark");
    navB.classList.toggle("inactive");
  } else {
    console.log("light");
    navB.classList.toggle("active");
    navB.classList.toggle("inactive");
  }

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


// DARK MODE

const dark = document.querySelector(".dark-mode");
var c = 0;

dark.addEventListener('click', () => {
  console.log("dark mode!!");
  dark.classList.toggle("dark-mode-on");

  document.body.id = 'dark';
  document.body.classList.toggle("body");
  document.body.classList.toggle("dark");


  navB.classList.toggle("active");
  navB.classList.toggle("active-dark");




  c = c + 1;
  console.log(c);

	if (c%2 == 0) {
		console.log("even");
    document.querySelector(".img-home").src = "assets/images/image_home/fleurs.png";
    document.querySelector(".img-cv").src = "assets/images/image_home/fleurs_hor.png";
    document.querySelector(".img-footer").src = "assets/images/image_home/fleur_bottom.png";
    document.querySelectorAll(".img2").forEach((img) => {
      img.src = "assets/images/image_home/oeuil2.svg";
    })
    document.querySelectorAll(".img1").forEach((img) => {
      img.src = "assets/images/image_home/oeuil1.svg";
    })
    document.querySelector(".picto .picto-nav").src = "assets/images/pictos/menu_int_picto.svg";

    
  } else {
    console.log("odd");
    document.querySelector(".img-home").src = "assets/images/image_home/fleurs_ver_dark.png";
    document.querySelector(".img-cv").src = "assets/images/image_home/fleurs_hor_dark.png";
    document.querySelector(".img-footer").src = "assets/images/image_home/fleur-bottom_dark.png";
    document.querySelectorAll(".img2").forEach((img) => {
      img.src = "assets/images/image_home/oeuil2_dark.svg";
    })
    document.querySelectorAll(".img1").forEach((img) => {
      img.src = "assets/images/image_home/oeuil1_dark.svg";
    })
    document.querySelector(".picto .picto-nav").src = "assets/images/pictos/menu_int_picto_dark.svg";

  
  };




});

// DARK MODE
