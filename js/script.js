//Прилипающая шапка
window.onscroll = function() {myFunction()};
let header = document.querySelector('.header-top');
let fixed = header.offsetTop;
let paddingTopValue = header.offsetHeight + 'px';
let headerSlider = document.querySelector('.header-slider');
function myFunction() {
  if (window.pageYOffset > fixed) {
    header.classList.add('fixed');
    headerSlider.style.paddingTop = paddingTopValue;
  } else {
    header.classList.remove('fixed');
    headerSlider.style.paddingTop = 0;
  }
}

//Выпадающее меню для тачскринов
let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
let body = document.querySelector('body');
if (isMobile.any()) {
	body.classList.add('touch');
	let arrow = document.querySelectorAll('.arrow');
	for (i = 0; i < arrow.length; i++) {
		let thisLink = arrow[i].previousElementSibling;
		let subMenu = arrow[i].nextElementSibling;
		let thisArrow = arrow[i];
		thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function() {
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('open');
		});
	}
} else {
	body.classList.add('mouse');
	let arrow = document.querySelectorAll('.arrow');
	for (i = 0; i < arrow.length; i++) {
		let thisLink = arrow[i].previousElementSibling;
		thisLink.classList.add('parent');
	}
}

//Бургер-меню
let burger = document.querySelector('.burger');
let burgerContent = document.querySelector('.burger-content');
burger.addEventListener('click', function(e) {
	e.preventDefault();
	burger.classList.toggle('active');
	burgerContent.classList.toggle('active-content');
	body.classList.toggle('lock');
	if (burger.classList.contains('active')) {
    	header.classList.add('fixed');
    	headerSlider.style.paddingTop = paddingTopValue;
  } else if (window.pageYOffset <= fixed) {
	    header.classList.remove('fixed');
	    headerSlider.style.paddingTop = 0;
	}
});

//Слайдер
new Swiper ('.header-slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	grabCursor: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true
	},
	mousewheel: {
		sensitivity: 1
	},
	autoHeight: true,
	loop: true,
});