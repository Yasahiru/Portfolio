/* Scroll effect using JavaScript */
window.addEventListener("scroll", function() {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        let sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show-animate");
        }
    });
});