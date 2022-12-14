let slideIndex = 1
showSlides(slideIndex)

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let slides = document.querySelectorAll('.card')
    let dots = document.querySelectorAll('.dot')


    if(n > slides.length) {
        slideIndex = 1
    }

    if(n < 1) {
        slideIndex = slides.length
    }

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for(let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active')
    }

    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].classList += " active"
}