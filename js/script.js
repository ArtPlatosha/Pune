// acitvate the wevsite hamburger and navigation
const hamburger = document.querySelector('.hamb');
const nav = document.querySelector('.nav-mobile');

hamburger.addEventListener('click', function() {
	hamburger.classList.toggle('active');
	nav.classList.toggle('slide');
});