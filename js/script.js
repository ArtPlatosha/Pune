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

// scroll reveal effects
const sr = ScrollReveal ({
	distance: '85px',
	duration: 2000,
	reset: false,
});

sr.reveal('.hero .content', {
	delay: 450,
	origin: 'bottom',
});

sr.reveal('.about img', {
	delay: 450,
	origin: 'left',
});

sr.reveal('.about .content', {
	delay: 450,
	origin: 'right',
});

sr.reveal('.info .content', {
	delay: 450,
	origin: 'top',
});

sr.reveal('.culture .content', {
	delay: 450,
	origin: 'left',
});

sr.reveal('.culture img', {
	delay: 450,
	origin: 'right',
});