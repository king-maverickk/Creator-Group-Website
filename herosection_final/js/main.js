document.addEventListener('DOMContentLoaded', () => {
    // Split text into characters for font-cycling animation
    const heroTitle = document.getElementById('hero-title');
    const lines = heroTitle.querySelectorAll('.line');
    
    lines.forEach(line => {
        const text = line.textContent;
        line.innerHTML = '';
        [...text].forEach(char => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.className = 'char';
            line.appendChild(span);
        });
    });

    // Initialize GSAP Draggable for all draggable elements
    gsap.registerPlugin(Draggable);
    
    Draggable.create(".draggable", {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: ".hero-container",
        inertia: true,
        onPress: function() {
            gsap.to(this.target, { scale: 1.1, duration: 0.2 });
        },
        onRelease: function() {
            gsap.to(this.target, { scale: 1, duration: 0.2 });
        }
    });

    // Add random slight rotation to stickers on load
    document.querySelectorAll('.sticker').forEach(sticker => {
        if (!sticker.style.transform.includes('rotate')) {
            const randomRot = (Math.random() - 0.5) * 10;
            sticker.style.transform += ` rotate(${randomRot}deg)`;
        }
    });
});
