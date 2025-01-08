const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.nav');

console.log(navbar)

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
    }
});