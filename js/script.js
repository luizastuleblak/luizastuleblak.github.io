let portfolioTabs = document.getElementsByClassName('portfolio-tab');
let tabContents = document.getElementsByClassName('tab-content');
const menuBtn = document.querySelector('.ri-menu-5-line');
const navList = document.querySelector('.navlist');
const nav = document.querySelector('nav');
const footerYear = document.querySelector('.footer-year');
const msgStatus = document.querySelector('.msg-status');

console.log(document.location.search);

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('success');
	msgStatus.textContent = 'Your message has been sent. Thank you!';

	setTimeout(() => {
		msgStatus.classList.remove('success')
	}, 3000);
}
if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('Error');
	msgStatus.textContent = 'Error occured!';

	setTimeout(() => {
		msgStatus.classList.remove('error')
	}, 3000);
}

function tabOpen(name) { 
	for(portfolioTab of portfolioTabs) {
		portfolioTab.classList.remove('active-btn');
	}
	for(tabContent of tabContents) {
		tabContent.classList.remove('active-content')
	}
	event.currentTarget.classList.add('active-btn');
	document.getElementById(name).classList.add('active-content')
}
 

menuBtn.onclick = function () {
	menuBtn.classList.toggle('ri-arrow-up-double-line');
	navList.classList.toggle('active');
}

window.onscroll = function () {
	navList.classList.remove('active');
	menuBtn.classList.remove('ri-arrow-up-double-line');

	if (scrollY > 50) {
		nav.classList.add('scrolling')
	} else {
		nav.classList.remove('scrolling')
	}
}


const handleCurrentYear = () => {
	const year = (new Date).getFullYear();
	footerYear.innerText = year;
}

handleCurrentYear();

// ------------------ANIMATIONS----------------------

const scroll = ScrollReveal({
	distance: '80px',
	duration: 2500,
	delay: 200,
	reset: true,
});

scroll.reveal('nav .logo', { reset: false, origin: 'top', reset: false });
scroll.reveal('nav .navlist li:nth-child(1)', { delay: 100, reset: false, origin: 'top' });
scroll.reveal('nav .navlist li:nth-child(2)', { delay: 200, reset: false, origin: 'top' });
scroll.reveal('nav .navlist li:nth-child(3)', { delay: 300, reset: false, origin: 'top' });
scroll.reveal('nav .navlist li:nth-child(4)', { delay: 400, reset: false, origin: 'top' });
scroll.reveal('.home-container .content', { origin: 'left' });
scroll.reveal('.home-container .image', { origin: 'right', reset: false });
scroll.reveal('.home-container .social-icons', { distance: "122px", origin: 'bottom', reset: false });
scroll.reveal('.about-container .left', { origin: 'top', reset: false });
scroll.reveal('.about-container .right', { origin: 'bottom', reset: false });
scroll.reveal('.about-container .skills-container .card:nth-child(1)', { delay: 100, origin: 'right' });
scroll.reveal('.about-container .skills-container .card:nth-child(2)', { delay: 200, origin: 'right' });
scroll.reveal('.about-container .skills-container .card:nth-child(3)', { delay: 300, origin: 'right' });
scroll.reveal('.about-container .skills-container .card:nth-child(4)', { delay: 400, origin: 'right' });
scroll.reveal('.about-container .skills-container .card:nth-child(5)', { delay: 500, origin: 'right' });
scroll.reveal('.about-container .skills-container .card:nth-child(6)', { delay: 600, origin: 'right' });
scroll.reveal('.about-container .skills-container .card:nth-child(7)', { delay: 700, origin: 'right' });
scroll.reveal('.about-container .skills-container .card:nth-child(8)', { delay: 800, origin: 'right' });
scroll.reveal('.about-container .skills-container .card:nth-child(9)', { delay: 900, origin: 'right' });
scroll.reveal('.about-container .skills-container .card:nth-child(10)', { delay: 1000, origin: 'right' });
scroll.reveal('.about-container .skills-container .card:nth-child(11)', { delay: 1100, origin: 'right' });
scroll.reveal('.about-container .skills-container .card:nth-child(12)', { delay: 1200, origin: 'right' });
scroll.reveal('.about-container .skills-container .card:nth-child(13)', { delay: 1300, origin: 'right' });
scroll.reveal('.about-container .skills-container .card:nth-child(14)', { delay: 1400, origin: 'right' });
scroll.reveal('.about-container .skills-container .card:nth-child(15)', { delay: 1500, origin: 'right' });
scroll.reveal('.portfolio-container', { origin: 'bottom', reset: false });
scroll.reveal('.contact-container .box:nth-child(1)', { delay: 100, origin: 'left', reset: false });
scroll.reveal('.contact-container .box:nth-child(2)', { delay: 300, origin: 'left', reset: false });
scroll.reveal('.title', { origin: 'top', reset: false });
scroll.reveal('.ri-arrow-right-circle-line', {delay: 100, origin: 'bottom' });

