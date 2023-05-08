// acitvate the wevsite hamburger and navigation
const hamburger = document.querySelector('.hamb');
const nav = document.querySelector('.nav-mobile');

hamburger.addEventListener('click', function() {
	hamburger.classList.toggle('active');
	nav.classList.toggle('slide');
});

// hide mobile nav after clicking
document.onclick = function(n) {
	if (n.target.id !== 'hamb' && n.target.id !== 'nav-mobile') {
		hamburger.classList.remove('active');
		nav.classList.remove('slide');
	}
};