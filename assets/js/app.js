document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");

    toggle.addEventListener("click", function () {
        toggle.classList.toggle("active");
        menu.classList.toggle("active");
    });
});
