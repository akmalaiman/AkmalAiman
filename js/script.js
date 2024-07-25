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
