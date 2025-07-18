var type = new Typed(".typing", {
  strings: [
    "",
    "Python Expert",
    "Python Automation Expert",
    "Web Scraping Specialist",
    "Frontend Developer",
    "Freelancer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// *Initialize EmailJS with your public key
(function () {
  emailjs.init("CzHA4HlNG9zlQhPQC"); // ✅ Your actual Public Key
})();

// Handle form submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_rooh121", "template_gaa84ko", this).then(
    function (response) {
      alert("✅ Message sent successfully!");
      document.getElementById("contactForm").reset();
    },
    function (error) {
      alert("❌ Failed to send message. Check console for details.");
      console.error("EmailJS error:", error);
    }
  );
});

// NAVIGATION ACTIVE ITEM;

// Select all <a> tags inside .nav list items
const navLink = document.querySelectorAll(".nav li a");

navLink.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' from all links
    navLink.forEach((l) => l.classList.remove("active"));

    // Add 'active' to the clicked one
    this.classList.add("active");
  });
});

// =================== SCROLL SECTION ACTIVE LINK ===================
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  sections.forEach((section) => {
    let sectionTop = section.offsetTop - 100;
    let sectionHeight = section.offsetHeight;
    let sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// =================== SIDEBAR TOGGLE ===================
const toggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

// Toggle sidebar on icon click
toggler.addEventListener("click", () => {
  aside.classList.toggle("open");
});

// ✅ Close sidebar when any nav link is clicked
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    aside.classList.remove("open");
  });
});

// =================== SCROLL REVEAL ===================
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-info, .section-title", {
  origin: "top",
});
ScrollReveal().reveal(
  ".home-image, .contact .container, .service .container ",
  {
    origin: "bottom",
  }
);
