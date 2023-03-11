let navbar = document.querySelector(".navbar");
let burger = document.querySelector(".burger")
let navToggle = document.querySelector('.navToggle');
let lines = document.querySelectorAll('.line');


navToggle.addEventListener("click", burgerOpen);

function burgerOpen() {
    console.log("burger toggled " + burger);
    navbar.classList.toggle("open")
    burger.classList.toggle('circle')
        for (let i = 0; i < lines.length; i++) { 
            lines[i].classList.toggle('crisscross')
        }

}




window.onscroll = function() {invisNav(width)}


var width = window.matchMedia("(min-width: 768px)")
function invisNav(width) {
    if (width.matches) {
        if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) { {
        navbar.classList.add("visable")
            console.log('we adding')
    } } 
    else {
        navbar.classList.remove("visable");
            console.log('we removing')
    }
    }   

    if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
    for (let i = 0; i < lines.length; i++) { 
        lines[i].classList.add('lineOpacity')
    }     }
    else {
    for (let i = 0; i < lines.length; i++) { 
        lines[i].classList.remove('lineOpacity')
    }
    }
}