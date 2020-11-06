const navSlide = () => {
    const mobileNav = document.querySelector('.mobile-nav');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    mobileNav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // Mobile Menu Animation
        mobileNav.classList.toggle('mobile-nav-animation');
    });
}


const app = () => {
    navSlide();
}

app();