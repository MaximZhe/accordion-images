
let slides = document.querySelectorAll(".slide");

function closeSlide () {
    slides.forEach((item) => {
        item.classList.remove("active");
    });
}

for ( let slide of slides){
    slide.addEventListener("click", () => {
        closeSlide ();
        slide.classList.add("active");
    })
}
