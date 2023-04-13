/*Burger-menu*/
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")
 
menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
 menuHamburger.classList.toggle('cross');
})

const container = document.querySelector('.container-n2');
const hamburgerMenu = document.querySelector('.menu-hamburger');

hamburgerMenu.addEventListener('click', function() {
  container.classList.toggle('hide');
});


function changeColor() {
  var hamburger = document.getElementById("menu-hamburger");
  hamburger.classList.toggle("active");
}
/*MULTI TEXT*/
var typingEffect = new Typed(".multitext",{
    strings : ["UI.","","UX/UI Designer.","Web-Designer."],
    loop : true,
    typeSpeed : 100,
    backSpeed : 60,
    backDelay : 1500
})
/******MULTI TEXT******/

/*Logo Animation*/
var logo = document.getElementById('logo');
var windowHeight = window.innerHeight;

window.addEventListener('scroll', function() {
  var scroll = window.scrollY;

  // Проверяем, находится ли логотип ниже окна браузера
  if (scroll > windowHeight) {
    logo.style.opacity = 0;
  } else {
    // Если пользователь вернулся к самому верху страницы, плавно показываем логотип обратно
    if (scroll === 0) {
      logo.style.transition = 'opacity 0.5s ease';
      logo.style.opacity = 1;
    } else {
      // Если логотип еще не достиг нижней границы окна, просто скрываем его
      logo.style.transition = '';
      logo.style.opacity = 1 - (scroll / windowHeight);
    }
  }
});
/*scroll animation*/

SmoothScroll({
// time scroll 400 = 0.4 s
animationTime : 650,
// value in step px
stepSize : 75,

// additional information:

// speed
accelerationDelta : 30,
// max speed
accelerationMax : 2,

// keyboard support
keyboardSupport : true,
// Keyboard arrow scroll step in px
arrowScroll : 50,

// Pulse (less tweakable)
// ratio of "tail" to "acceleration"
pulseAlgorithm : true,
pulseScale : 4,
pulseNormalize : 1,

// touchpad support
touchpadSupport : true,
})


//footer button to top//
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}




