let menuToggle = document.querySelector(".menuToggle")
let menu = document.querySelector(".menu")
let menuToggleSpan = document.querySelector(".menuToggle span")

menuToggle.onclick = function() {
    menuToggle.classList
    .toggle("active")
    menuToggleSpan.classList
    .toggle("active")
    menu.classList.toggle("responsive")
}