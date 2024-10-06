// scripts/script.js

window.addEventListener('scroll', function() {
    var navHeight = document.querySelector('header').offsetHeight;
    var hero = document.querySelector('.hero');
    var scrolled = window.scrollY;
    
    if (scrolled <= navHeight) {
        hero.style.transform = 'translateY(' + scrolled + 'px)';
    }
});