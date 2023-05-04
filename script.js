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

/*SLIDESHOW 1*/
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


    /*SLIDESHOW 2*/
    let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("slide2");
    if (n > slides.length) {slideIndex2 = 1}    
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex2-1].style.display = "block";  
}


    /*SLIDESHOW 3*/
    let slide3Index = 1;
    showSlides3(slide3Index);
    
    function plusSlides3(n) {
        showSlides3(slide3Index += n);
    }
    
    function currentSlide3(n) {
        showSlides3(slide3Index = n);
    }
    
    function showSlides3(n) {
        let i;
        let slides = document.getElementsByClassName("slide3");
        if (n > slides.length) {slide3Index = 1}    
        if (n < 1) {slide3Index = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
    
        slides[slide3Index-1].style.display = "block";  
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
    case 2:
      modal[2].classList.add('modalmodal')
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

cards[2].addEventListener('click', function() {
  openModal(2);
});


modal[0].querySelector('.close').addEventListener('click', function() {
  closeModal(0);
});

modal[1].querySelector('.close').addEventListener('click', function() {
  closeModal(1);
});

modal[2].querySelector('.close').addEventListener('click', function() {
  closeModal(2);
});
