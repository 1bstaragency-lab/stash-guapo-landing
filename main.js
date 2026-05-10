document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view');
    const infoCard = document.querySelector('.info-card');

    // Tab switching logic
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            const target = item.getAttribute('data-target');

            // Update active nav link
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Update active view
            views.forEach(view => {
                view.classList.remove('active');
                if (view.id === `${target}-view`) {
                    view.classList.add('active');
                }
            });

            // Add a subtle bounce to the card on switch
            infoCard.style.transform = 'scale(0.98)';
            setTimeout(() => {
                infoCard.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Initial fade-in for the card
    if (infoCard) {
        infoCard.style.opacity = '0';
        infoCard.style.transform = 'translateY(20px)';
        infoCard.style.transition = 'opacity 0.8s ease, transform 0.4s cubic-bezier(0.19, 1, 0.22, 1)';
        
        setTimeout(() => {
            infoCard.style.opacity = '1';
            infoCard.style.transform = 'translateY(0)';
        }, 300);
    }
});
