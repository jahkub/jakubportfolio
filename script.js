window.onscroll = function() {invisNav()};


function invisNav() {
    if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
        navbar.classList.add("visable")
    } else {
        navbar.classList.remove("visable");
        }

};
let navbar = document.querySelector(".navbar");
let burger = document.querySelector(".burger")

burger.addEventListener("click", burgerOpen);

function burgerOpen() {
    console.log("burger toggled " + burger);
    navbar.classList.toggle("open")
}