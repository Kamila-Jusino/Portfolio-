// Typewriter Effect
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    const text = "Kamila Jusino Meléndez.";
    
    if (heroTitle) {
        heroTitle.textContent = ""; // Clear existing text
        
        // Wait for the fadeInUp animation to complete (0.8s duration + 0.2s delay = 1s total)
        setTimeout(() => {
            let i = 0;
            
            function type() {
                if (i < text.length) {
                    heroTitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, 100);
                }
            }
            
            type();
        }, 1000); // Wait 1000ms for animation to finish
    }

    // Project Card Click Handler
    const projectCards = document.querySelectorAll('.project-card[data-github]');
    projectCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const githubUrl = card.getAttribute('data-github');
            window.open(githubUrl, '_blank');
        });
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link
            const subject = encodeURIComponent(`Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            window.location.href = `mailto:kamila.jusino@gmail.com?subject=${subject}&body=${body}`;
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Ambient Background Particles
function createParticles() {
    const bg = document.querySelector('.ambient-bg');
    // Clear existing particles
    const existingParticles = bg.querySelectorAll('.particle');
    existingParticles.forEach(p => p.remove());
    
    // Create more particles based on screen size
    const screenArea = window.innerWidth * window.innerHeight;
    const particleCount = Math.max(20, Math.min(40, Math.floor(screenArea / 20000)));
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        const size = Math.random() * 6 + 3; // Larger particles (3-9px)
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        bg.appendChild(particle);
    }
}

// Create particles on load
createParticles();

// Recreate particles on resize to maintain visibility
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(createParticles, 250);
});