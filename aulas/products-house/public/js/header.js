console.log("Start Header JS");

const searchBar = document.querySelector("#search");
const menuMobileOpenButton = document.querySelector("#menu-mobile--open");
const menuMobile = document.querySelector(".menu-mobile");
const menuMobileCloseButton = document.querySelector("#menu-mobile--close");


searchBar.addEventListener("mouseenter", openSearchBar);
searchBar.addEventListener("mouseleave", closeSearchBar);
menuMobileOpenButton.addEventListener("click", openMenuMobile);
menuMobileCloseButton.addEventListener("click", closeMenuMobile);

function openSearchBar(event) {
    event.preventDefault();
    searchBar.classList.add("active");
}

function closeSearchBar(event) {
    event.preventDefault();
    searchBar.classList.remove("active");
}

function openMenuMobile() {
    menuMobile.style.transition = '3s';
    menuMobile.classList.add('active');
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function closeMenuMobile() {
    menuMobile.classList.remove('active');
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
}