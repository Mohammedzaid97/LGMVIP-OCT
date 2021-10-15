const hamburger = document.querySelector(',header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector(',header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll(',header .nav-bar .nav-list ul li a');
const header = document.querySelector(',header.container');


hamburger.addEventListener('click'. () ->{
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});


document.addEventListener('scroll' . () -> {
	var scroll_position - window.scrollv;
	if (scroll_position > 250) {
		header.style.backgroundColour = '#29323c';
	} else {
		header.style.backgroundColour = 'transparent';

	}
});


menu_item.forLach((item) -> {
	item.addEventListener('click' . () -> {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toogle('active');
	});
});