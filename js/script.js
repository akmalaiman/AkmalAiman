//Display current year for footer
const currentYear = new Date().getFullYear();
document.getElementById("footer-year").innerHTML = currentYear;

//Typing Animation
var typed = new Typed(".multiple-text", {
        strings: [
                "Full Stack Developer",
                "Software Engineer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1000,
        loop: true
});

//Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
};

//Scroll Section Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
        sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                        navLinks.forEach(link => {
                                link.classList.remove('active');
                                document.querySelector('header nav a[href*='+id+']').classList.add('active')
                                console.log(id);
                        });
                }
        });

        /*Sticky Navbar*/
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        /*Remove toggle icon and navbar when the navbar link is click*/
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
};

//Scroll Reveal
ScrollReveal({
        reset: true,
        distance: '200px',
        duration: 2000,
        delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form, .journey-box, .journey-content, .portfolio-accordion', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .journey-column .title', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

//Portfolio Accordion
function toggleAccordion(element) {
        const allContents = document.querySelectorAll('.portfolio-accordion-content');
        const allHeaders = document.querySelectorAll('.portfolio-accordion-header');

        allContents.forEach((content, index) => {

                const iElement = allHeaders[index].querySelector('i');

                if (allHeaders[index] === element) {
                        const isOpen = content.style.display === 'block';
                        content.style.display = isOpen ? 'none' : 'block';
                        allHeaders[index].classList.toggle('active', !isOpen);
                        iElement.classList.toggle('bx-chevrons-down', isOpen);
                        iElement.classList.toggle('bx-chevrons-up', !isOpen);
                } else {
                        content.style.display = 'none';
                        allHeaders[index].classList.remove('active');
                        iElement.classList.remove('bx-chevrons-up');
                        iElement.classList.add('bx-chevrons-down');
                }
        });
}