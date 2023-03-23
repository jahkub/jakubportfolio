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
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) { {
        navbar.classList.add("visable")
            console.log('we adding')
    } } 
    else {
        navbar.classList.remove("visable");
            console.log('we removing')
    }
    }   

    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    for (let i = 0; i < lines.length; i++) { 
        lines[i].classList.add('lineOpacity')
    }     }
    else {
    for (let i = 0; i < lines.length; i++) { 
        lines[i].classList.remove('lineOpacity')
    }
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";  
    }


    let modal = document.querySelector(".modal");
    let cardo = document.querySelector(".open1");
    let closer = document.querySelector(".close");


    cardo.addEventListener('click', openModal)
    closer.addEventListener('click', closeModal)


    function openModal() {
        console.log('we openin')
        modal.classList.add('modalmodal')
    }
    function closeModal() {
        console.log('we closin')
        modal.classList.remove('modalmodal')
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('modalmodal')
        }
    }