// =========================
// Mobile Navigation Menu
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {
  navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {
  
  link.addEventListener("click", function() {
    navLinks.classList.remove("active");
  });
  
});


// =========================
// Dark / Light Mode
// =========================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function() {
  
  document.body.classList.toggle("dark-mode");
  
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
  
});


// Remember user's theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
  
}


// =========================
// Contact Form
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
  
  event.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  
  if (name === "" || email === "" || message === "") {
    
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
    
    return;
  }
  
  formMessage.textContent =
    "Thank you! Your message has been received.";
  
  formMessage.style.color = "green";
  
  contactForm.reset();
  
});
