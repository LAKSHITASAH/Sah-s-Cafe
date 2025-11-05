document.addEventListener('DOMContentLoaded', () => {

    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const itemType = item.getAttribute('data-type'); // Gets 'hot' or 'cold'

        // Apply temperature-based glow effect on mouse enter
        item.addEventListener('mouseenter', () => {
            if (itemType === 'hot') {
                // Add the warm glow class defined in CSS
                item.classList.add('hot-glow');
            } else if (itemType === 'cold') {
                // Add the cool glow class defined in CSS
                item.classList.add('cold-glow');
            }
            // All items get the base hover effect (translateY, scale) from CSS
        });

        // Remove glow effect on mouse leave
        item.addEventListener('mouseleave', () => {
            item.classList.remove('hot-glow');
            item.classList.remove('cold-glow');
        });
    });

    // OPTIONAL: Simple scroll effect for hero (can enhance CSS parallax)
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero-section');
        const scrollPosition = window.scrollY;
        // Move the background slightly slower than the foreground
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
});