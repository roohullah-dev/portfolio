// ========================= Toggle Style Switcher  =========================

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style - switcher scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// ========================= Theme Colors ====================================
// const alternateStyle = document.querySelectorAll(".alternate-style");
// function setActiveStyle(color) {
//   alternateStyle.forEach((style) => {
//     if (color === style.getAttribute("title")) {
//       style.removeAttribute("disabled");
//     } else {
//       style.setAttribute("disabled", "true");
//     }
//   });
// }

const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// ===== Toggle .colors visibility =====
const colorBox = document.querySelector(".colors");

// Add your own trigger button/icon with id "toggle-colors"
const toggleColorsBtn = document.querySelector("#toggle-colors");

if (toggleColorsBtn && colorBox) {
  toggleColorsBtn.addEventListener("click", function () {
    colorBox.classList.toggle("show");
  });
}

// ========================= Theme Day-Night Mode ====================================

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("darks")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
