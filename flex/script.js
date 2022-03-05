const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navIcon = document.querySelector(".nav-toggle i");

navToggle.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) navIcon.className = "fas fa-bars";
    else navIcon.className = "fa-solid fa-xmark";
    navMenu.classList.toggle("active");
});

const itemsWithSubmenu = document.querySelectorAll(".has-submenu");
const submenus = document.querySelectorAll(".submenu");

for (let item of itemsWithSubmenu) {
    item.addEventListener("click", () => {
        const selSubmenu = item.querySelector(".submenu");
        let active = selSubmenu.classList.contains("submenu-active");
        for (let submenu of submenus) {
            submenu.classList.remove("submenu-active");
        }
        if (active) selSubmenu.classList.remove("submenu-active");
        else selSubmenu.classList.add("submenu-active");
    });
}
