const carousel = document.querySelector(".carousel .main");
const btnNext = document.querySelector("#forward");
const btnPrev = document.querySelector("#back");
const dots = document.querySelectorAll(".button-wrapper .dot");
const slides = document.querySelectorAll(".carousel .main .container");

//buttons

btnNext.addEventListener("click", () => {
    let active = document.querySelector(".container.active");
    let activeDot = document.querySelector(".dot.active");
    let nextSlide = active.nextElementSibling;
    let nextDot = activeDot.nextElementSibling;
    if (nextSlide || nextDot) {
        active.classList.remove("active");
        nextSlide.classList.add("active");
        activeDot.classList.remove("active");
        nextDot.classList.add("active");
        carousel.style.transform += `translate(${-25}%)`;
    }
});

btnPrev.addEventListener("click", () => {
    let active = document.querySelector(".container.active");
    let activeDot = document.querySelector(".dot.active");
    let prevSlide = active.previousElementSibling;
    let prevDot = activeDot.previousElementSibling;
    if (prevSlide || prevDot) {
        active.classList.remove("active");
        prevSlide.classList.add("active");
        activeDot.classList.remove("active");
        prevDot.classList.add("active");
        carousel.style.transform += `translate(${25}%)`;
    }
});

dots[0].addEventListener("click", () => {
    carousel.style.transform = `translate(-0%)`
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
        dots[0].classList.add("active");
        slides[i].classList.remove("active");
        slides[0].classList.add("active");
    }
})

dots[1].addEventListener("click", () => {
    carousel.style.transform = `translate(-25%)`
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
        dots[1].classList.add("active");
        slides[i].classList.remove("active");
        slides[1].classList.add("active");
    }
})

dots[2].addEventListener("click", () => {
    carousel.style.transform = `translate(-50%)`
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
        dots[2].classList.add("active");
        slides[i].classList.remove("active");
        slides[2].classList.add("active");
    }
})

dots[3].addEventListener("click", () => {
    carousel.style.transform = `translate(-75%)`
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
        dots[3].classList.add("active");
        slides[i].classList.remove("active");
        slides[3].classList.add("active");
    }
})