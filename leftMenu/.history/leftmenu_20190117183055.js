var menuOpen = document.querySelector(".top-nav .menu-open");
var menuClose = document.querySelector(".top-nav .menu-close");
var menuWrapper = document.querySelector(".top-nav .menu-wrapper");
var topBannerOverlay = document.querySelector(".top-banner-overlay");

function toggleMenu() {
    menuOpen.addEventListener("click", function () {
        menuWrapper.classList.add("is-opened");
        topBannerOverlay.classList.add("is-moved");
    });

    menuClose.addEventListener("click", function () {
        menuWrapper.classList.remove("is-opened");
        topBannerOverlay.classList.remove("is-moved");
    });
}

toggleMenu();
