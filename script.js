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


    /*let modal = document.querySelectorAll(".modal");
    let card1 = document.querySelector(".open1");
    let card2 = document.querySelector('.open2')
    let closer = document.querySelector(".close");
    let card = document.querySelectorAll('.card')




for (let z = 0; z < modal.length; z++) {
    
    function openModal() {
        console.log(z)
        switch (z) {
        case 0:
        console.log('we openin')
        modal[0].classList.add('modalmodal')

        break;
        case 1:
            console.log("bras")
            modal[1].classList.add('modalmodal')
        break;
            }
        }
    
    
    
    
    function closeModal() {
        console.log('we closin')
        modal[z].classList.remove('modalmodal')
    }
    window.onclick = function(event) {
        if (event.target == modal[z]) {
            modal[z].classList.remove('modalmodal')
        }
    }


    card1.addEventListener('click', openModal)
    card2.addEventListener('click', openModal)
    closer.addEventListener('click', closeModal)
    } */

    /*let modal = document.querySelectorAll(".modal");
let card1 = document.querySelector(".open1");
let card2 = document.querySelector('.open2')
let closer = document.querySelector(".close");
let cards = document.querySelectorAll('.card');

function openModal(z) {
  switch (z) {
    case 0:
      modal[0].classList.add('modalmodal')
      break;
    case 1:
      modal[1].classList.add('modalmodal')
      break;
  }
}

function closeModal(z) {
  modal[z].classList.remove('modalmodal')
}

for (let z = 0; z < modal.length; z++) {
    
  cards[z].addEventListener('click', function() {
    console.log(z)
    openModal(z);
  });
  
  closer.addEventListener('click', function(event) {
    closeModal(z);
  });
}*/

let modal = document.querySelectorAll(".modal");
let card1 = document.querySelector(".open1");
let card2 = document.querySelector('.open2');
let cards = document.querySelectorAll('.card');

function openModal(z) {
  switch (z) {
    case 0:
      modal[0].classList.add('modalmodal')
      break;
    case 1:
      modal[1].classList.add('modalmodal')
      break;
  }
}

function closeModal(z) {
  modal[z].classList.remove('modalmodal')
}

cards[0].addEventListener('click', function() {
  openModal(0);
});

cards[1].addEventListener('click', function() {
  openModal(1);
});

modal[0].querySelector('.close').addEventListener('click', function() {
  closeModal(0);
});

modal[1].querySelector('.close').addEventListener('click', function() {
  closeModal(1);
});
