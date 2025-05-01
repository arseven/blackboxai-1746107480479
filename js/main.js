document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply initial styles to project cards
    document.querySelectorAll('.bg-gray-50').forEach(card => {
        card.classList.add('project-card');
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });

    // Smooth scroll implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            try {
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollBy({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            } catch (error) {
                console.warn('Smooth scroll error:', error);
            }
        });
    });

    // Add hover effect for project links
    document.querySelectorAll('.project-card a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.opacity = '0.7';
        });
        link.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });
});
