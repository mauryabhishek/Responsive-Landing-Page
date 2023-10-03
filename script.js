const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('circle');
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('circle');
    });
});
