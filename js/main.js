/* Function to add and remove 'open' to the 'hamburguer-icon' and 'menu-links' classes */

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}