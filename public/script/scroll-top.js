const scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const scrollToTop = () => {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.scrollTo(0, Math.max(0, currentScroll - currentScroll / 10));
            requestAnimationFrame(scrollToTop);
        }
    };
    
    scrollToTop();
});
