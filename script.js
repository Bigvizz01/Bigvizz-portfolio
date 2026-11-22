document.addEventListener("DOMContentLoaded", () => {

  const button = document.querySelector("#menu-toggle");

  const menu = document.querySelector("#nav-links");

  console.log("Menu script loaded:", button, menu);

  if (!button || !menu) {

    console.error("Menu button or navigation menu not found!");

    return;

  }

  button.addEventListener("click", () => {

    menu.classList.toggle("active");

    console.log("Menu clicked!");

  });
const contactButton = document.querySelector("#home .btn-outline");

if (contactButton) {

  contactButton.addEventListener("click", (event) => {

    event.preventDefault();

    alert("Welcome to Big Vizz's Portfolio!");

  });

}
});
