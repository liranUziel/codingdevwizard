    export function toggleMenu()
    {
        const ul = document.getElementById("menu__list");
        const menuIcon = document.getElementById("menu-icon");
        menuIcon.classList.toggle("active");
        ul.classList.toggle("active");
    }