const slides = [
    "images/slide01.jpg",
    "images/slide02.jpg",
    "images/slide03.jpg",
    "images/slide04.jpg",
    "images/slide05.jpg"
];

let current = 0;

const image = document.getElementById("slideshow");

function nextSlide() {

    image.style.opacity = 0;

    setTimeout(() => {

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        image.src = slides[current];

        image.style.opacity = 1;

    }, 500);
}

setInterval(nextSlide, 4000);
