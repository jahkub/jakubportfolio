window.onscroll = function() {invisNav()};

var navbar = document.querySelector(".navbar")

function invisNav() {
    if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
        navbar.classList.add("visable")
    } else {
        navbar.classList.remove("visable");
        }

}