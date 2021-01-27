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



export menu;
