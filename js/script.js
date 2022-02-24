const burger = document?.querySelector('[data-burger]');
const header__nav = document?.querySelector('[data-nav]');
const navItems = header__nav?.querySelectorAll('a');
const body = document?.body;

burger?.addEventListener('click', () => {
    
    burger?.classList.toggle('burger--active');
    header__nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
        burger?.classList.remove('burger--active');
        header__nav?.classList.remove('nav--visible');
    });
});