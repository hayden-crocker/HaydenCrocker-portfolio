const hamburger = document.querySelector(".navContainer")

hamburger.addEventListener('click', (e) => {
    const menu = document.querySelector(".navContainer ul")
    
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
    } else {
        menu.classList.add("showMenu")
    }
    
})

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
    const projects = document.getElementsByClassName("project");
    if (n > projects.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = projects.length }
    for (i = 0; i < projects.length; i++) {
        projects[i].style.display = "none";
    }
    projects[slideIndex - 1].style.display = "block";
}
