const toggler = document.querySelector(".toggler");
const navMenu = document.querySelector("#navMenu");

toggler.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});