document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view');
    const infoCard = document.querySelector('.info-card');
    const heroVideo = document.getElementById('hero-video');

    // Responsive Video Selection
    const setVideoSource = () => {
        const isMobile = window.innerWidth <= 768;
        const currentSrc = heroVideo.querySelector('source')?.src;
        const targetSrc = isMobile ? 'mobile_video.mp4' : 'desktop_video.mp4';

        // Only update if source actually changes to avoid flickering
        if (!currentSrc || !currentSrc.includes(targetSrc)) {
            heroVideo.innerHTML = `<source src="${targetSrc}" type="video/mp4">`;
            heroVideo.load();
            heroVideo.play().catch(e => console.log("Auto-play prevented or video loading: ", e));
        }
    };

    setVideoSource();
    window.addEventListener('resize', setVideoSource);

    // Tab switching logic
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.getAttribute('data-target');

            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            views.forEach(view => {
                view.classList.remove('active');
                if (view.id === `${target}-view`) {
                    view.classList.add('active');
                }
            });

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
