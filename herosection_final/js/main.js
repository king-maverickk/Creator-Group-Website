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
    
    const draggableOptions = {
        type: "x,y",
        edgeResistance: 0.65,
        inertia: true,
        allowNativeTouchScrolling: false,
        onPress: function() {
            gsap.killTweensOf(this.target);
            gsap.to(this.target, { scale: 1.1, duration: 0.2 });
        },
        onRelease: function() {
            gsap.to(this.target, { scale: 1, duration: 0.2 });
        }
    };

    Draggable.create(".draggable:not(.who-you-are__secondary_img):not(.about-draggable)", {
        ...draggableOptions,
        bounds: ".hero-container"
    });

    Draggable.create(".who-you-are__secondary_img", {
        ...draggableOptions,
        bounds: ".who-you-are__image_and_text_group"
    });

    Draggable.create(".about-draggable", {
        ...draggableOptions,
        bounds: ".about__about_container"
    });

    // Add random slight rotation to stickers on load
    document.querySelectorAll('.sticker').forEach(sticker => {
        if (!sticker.style.transform.includes('rotate')) {
            const randomRot = (Math.random() - 0.5) * 10;
            sticker.style.transform += ` rotate(${randomRot}deg)`;
        }
    });
});


    // AI ≠ community: a soft AI-chat-style echo response moment.
    const aiTrigger = document.querySelector('.ai-community-trigger');
    const aiOverlay = document.getElementById('ai-echo-overlay');
    const aiParticles = document.getElementById('ai-echo-particles');
    const aiOrigin = document.getElementById('ai-echo-origin');
    const aiClose = document.querySelector('.ai-echo-close');
    const aiReplyPhrases = ['Same Same Same', "You're right", 'Read this', 'Read this', 'No read this', 'Thinking...'];
    const aiReplies = Array.from({ length: 52 }, (_, index) => aiReplyPhrases[index % aiReplyPhrases.length]);

    if (aiTrigger && aiOverlay && aiParticles && aiOrigin) {
        let autoCloseTimer;
        const randomBetween = (min, max) => Math.random() * (max - min) + min;

        function spawnAiEcho() {
            window.clearTimeout(autoCloseTimer);
            aiParticles.replaceChildren();
            aiOrigin.classList.remove('is-thinking');

            aiReplies.forEach((reply, index) => {
                const particle = document.createElement('div');
                particle.className = 'ai-echo-particle';
                particle.style.setProperty('--left', `${randomBetween(2, 95)}%`);
                particle.style.setProperty('--top', `${randomBetween(7, 95)}%`);
                particle.style.setProperty('--drift-x', `${randomBetween(-34, 34)}px`);
                particle.style.setProperty('--drift-y', `${randomBetween(-28, 28)}px`);
                particle.style.setProperty('--rotation', `${randomBetween(-18, 18)}deg`);
                particle.style.setProperty('--duration', `${randomBetween(1.65, 2.35)}s`);
                particle.style.setProperty('--delay', `${index * 60}ms`);
                particle.innerHTML = `<span class="particle-model">AI Model</span><span class="particle-bubble"><span class="particle-message">${reply}</span></span>`;
                aiParticles.appendChild(particle);
            });

            const finalParticleDelay = (aiReplies.length - 1) * 60;
            autoCloseTimer = window.setTimeout(closeAiEcho, finalParticleDelay + 2350);
        }

        function openAiEcho() {
            aiOverlay.classList.add('is-visible');
            aiOverlay.setAttribute('aria-hidden', 'false');
            spawnAiEcho();
            window.setTimeout(() => aiClose && aiClose.focus(), 80);
        }

        function closeAiEcho() {
            aiOverlay.classList.remove('is-visible');
            aiOverlay.setAttribute('aria-hidden', 'true');
            window.clearTimeout(autoCloseTimer);
            aiParticles.replaceChildren();
            aiTrigger.focus();
        }

        aiTrigger.addEventListener('click', openAiEcho);
        aiClose && aiClose.addEventListener('click', closeAiEcho);
        aiOverlay.addEventListener('click', (event) => {
            if (event.target === aiOverlay || event.target.classList.contains('ai-echo-backdrop')) closeAiEcho();
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && aiOverlay.classList.contains('is-visible')) closeAiEcho();
        });
    }
