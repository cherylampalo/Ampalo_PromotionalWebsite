// Toggle mobile navigation menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");

  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.backgroundColor = "#006400";
    navLinks.style.padding = "10px";
  }
}

// Smooth scroll effect for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });

    // Close menu after clicking (mobile)
    const navLinks = document.getElementById("navLinks");
    if (window.innerWidth <= 768) {
      navLinks.style.display = "none";
    }
  });
});

// Optional: Add a simple form submission alert
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting us! We will get back to you soon.");
  form.reset();
});