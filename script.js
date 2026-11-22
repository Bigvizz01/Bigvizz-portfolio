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

});
