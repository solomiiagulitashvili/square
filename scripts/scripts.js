var menu = document.querySelector(".main-nav-icon");

menu.addEventListener("click", function(evt) {
    menu.classList.toggle("open");
    
})

var open = document.querySelector(".popup-closed");
var popup = document.querySelector(".popup-opened");
var close = popup.querySelector(".close-popup");

open.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
})

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
})