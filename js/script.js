// Interactividad sutil con movimiento
document.addEventListener('mousemove', (e) => {
    const container = document.querySelector('.container');
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / centerY * -10;
    const rotateY = (x - centerX) / centerX * 10;
    
    container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.addEventListener('mouseleave', () => {
    const container = document.querySelector('.container');
    container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});

// Efecto de partículas al hacer clic
document.addEventListener('click', (e) => {
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.width = '6px';
        particle.style.height = '6px';
        particle.style.background = `linear-gradient(45deg, #667eea, #f5576c)`;
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 6;
        const velocity = 2;
        
        let x = 0;
        let y = 0;
        let opacity = 1;
        
        const animate = () => {
            x += Math.cos(angle) * velocity;
            y += Math.sin(angle) * velocity + 0.5;
            opacity -= 0.02;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        animate();
    }
});
