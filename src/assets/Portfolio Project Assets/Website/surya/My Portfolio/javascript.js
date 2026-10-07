// Simple form alert
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  alert("Thank you! We will contact you soon.");
  form.reset(); // Reset the form fields
});
