document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");

    const list = document.querySelector(".list");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        list.classList.toggle("active");
    });
});
