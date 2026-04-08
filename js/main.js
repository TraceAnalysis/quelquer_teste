
// Header
window.addEventListener("scroll", function() {
const navbar = document.querySelector(".navbar");
navbar.classList.toggle("scrolled", window.scrollY > 50);
});


// const reveals = document.querySelectorAll(".reveal");

// window.addEventListener("scroll", () => {
//   reveals.forEach(el => {
//     const windowHeight = window.innerHeight;
//     const elementTop = el.getBoundingClientRect().top;

//     if (elementTop < windowHeight - 100) {
//       el.classList.add("is-visible");
//     }
//   });
// });

// // Smooth Scroll Navigation
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {

//   anchor.addEventListener('click', function (e) {

//     const targetId = this.getAttribute('href');

//     if(targetId === '#') return;

//     const target = document.querySelector(targetId);

//     if(target){

//       e.preventDefault();

//       const headerOffset = 90;

//       const elementPosition = target.getBoundingClientRect().top;

//       const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth"
//       });

//     }

//   });

// });

// // Close Mobile Menu on Click
// document.querySelectorAll('.nav-link').forEach(link => {

//   link.addEventListener('click', () => {

//     const navbar = document.querySelector('.navbar-collapse');

//     if(navbar.classList.contains('show')){
//       new bootstrap.Collapse(navbar).toggle();
//     }

//   });

// });