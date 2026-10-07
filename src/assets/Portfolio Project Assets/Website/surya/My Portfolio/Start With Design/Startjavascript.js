// Contact Form Submission
const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! We will contact you soon 😊");
  form.reset();
});

// Simple smooth scroll effect for navbar
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
