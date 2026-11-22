document.addEventListener("DOMContentLoaded", () => {

  // HAMBURGER MENU

  const button = document.querySelector("#menu-toggle");

  const menu = document.querySelector("#nav-links");

  if (button && menu) {

    button.addEventListener("click", () => {

      menu.classList.toggle("active");

    });

  }

  // CONTACT BUTTON

  const contactButton = document.querySelector("#home .btn-outline");

  if (contactButton) {

    contactButton.addEventListener("click", (event) => {

      event.preventDefault();

      alert("Welcome to Big Vizz's Portfolio!");

    });

  }
// CHANGE HOME HEADING

const heading = document.querySelector("#home h1");

if (heading) {

  heading.addEventListener("click", () => {

    heading.textContent = "Welcome to Big Vizz!";

  });

}
  // DARK/LIGHT MODE TOGGLE

const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {

  themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

      themeButton.textContent = "☀️";

    } else {

      themeButton.textContent = "🌙";

    }

  });

}
});
