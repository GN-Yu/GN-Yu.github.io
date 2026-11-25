const menuButton = document.querySelector(".hamburger-icon");
const menu = document.querySelector(".menu-links");
const mobileNavigation = document.querySelector("#hamburger-nav");

function setMenuOpen(open) {
    menu.hidden = !open;
    menu.classList.toggle("open", open);
    menuButton.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}

menuButton.addEventListener("click", () => setMenuOpen(menu.hidden));

menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) {
        setMenuOpen(false);
        menuButton.focus();
    }
});

document.addEventListener("click", (event) => {
    if (!mobileNavigation.contains(event.target)) setMenuOpen(false);
});

mobileNavigation.addEventListener("focusout", (event) => {
    if (!mobileNavigation.contains(event.relatedTarget)) setMenuOpen(false);
});

window.matchMedia("(max-width: 1200px)").addEventListener("change", () => setMenuOpen(false));
