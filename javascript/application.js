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

//TEXT FIXED

const titles1 = document.querySelector(".section-projets .h-section");

// console.log(titles1.scrollTop);


// window.addEventListener('scroll', () => {
//   const lala = window.scrollY;
//   console.log(`lala = ${lala}`);
//   const titles1 = document.querySelector(".section-projets .title-content");
//   if (lala > 950 && lala < 2060) {
//     titles1.style.position = 'fixed';
//     console.log("fixed!!!!");
//   } else {
//     titles1.style.position = 'absolute';
//   }
// });
  


// const positionT = () => {
//   positionW();
//   if (scrollyW >= 950) {
//     console.log("fixed!!!!");
//   }
//   console.log("positionT");
//   const titles1 = document.querySelector(".section-projets .h-section");
//   console.log(titles1);
//   console.log(scrollyW);
 
// };

//NAV SCROLLING



{/* <div class="header">
    <p class="menu"><a href="#S1" onclick="test('S1'); return false;">S1</a></p>
    <p class="menu"><a href="#S2" onclick="test('S2'); return false;">S2</a></p>
    <p class="menu"><a href="#S3" onclick="test('S3'); return false;">S3</a></p>
    <p class="menu"><a href="#S4" onclick="test('S4'); return false;">S3</a></p>
</div>
<div style="width: 100%;">
    <div id="S1" class="curtain">
    blabla
    </div>
    <div id="S2" class="curtain">
    blabla
    </div>
    <div id="S3" class="curtain">
    blabla
    </div>
    <div id="S4" class="curtain">
    blabla
    </div>
 </div> */}






const scrollTo = (to, duration) => {
  if (document.body.scrollTop == to) return;
  var diff = to - document.body.scrollTop;
  var scrollStep = Math.PI / (duration / 10);
  var count = 0, currPos;
  start = element.scrollTop;
  scrollInterval = setInterval(function(){
      if (document.body.scrollTop != to) {
          count = count + 1;
          currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
          document.body.scrollTop = currPos;
      }
      else { clearInterval(scrollInterval); }
  },10);
};

const test = (elID) => {
  var dest = document.getElementById(elID);
  scrollTo(dest.offsetTop, 500);
};
