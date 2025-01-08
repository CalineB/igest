const scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.documentElement.scrollTop = 0; //Chrome, Firefox
    document.body.scrollTop = 0; //Safari
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
