document.addEventListener('DOMContentLoaded', () => {
    const chars = document.querySelectorAll('.char');
    const fonts = [
        "'Inter', sans-serif",
        "'Shadows Into Light', cursive",
        "'Gochi Hand', cursive",
        "'ADLaM Display', system-ui",
        "'Outfit', sans-serif"
    ];

    let flickerCount = 0;
    const maxFlickers = 15; // Number of font swaps in one animation burst
    const animationInterval = 7000; // 7 seconds average between bursts
    const longRestPeriod = 60000; // 1 minute rest
    let burstCount = 0;

    function runFontBurst() {
        if (flickerCount < maxFlickers) {
            chars.forEach(char => {
                const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
                char.style.fontFamily = randomFont;
            });
            flickerCount++;
            setTimeout(runFontBurst, 800);
        } else {
            // Reset to default
            chars.forEach(char => {
                char.style.fontFamily = "'Inter', sans-serif";
            });
            flickerCount = 0;
            burstCount++;
            
            if (burstCount >= 7) {
                burstCount = 0;
                setTimeout(runFontBurst, longRestPeriod);
            } else {
                setTimeout(runFontBurst, animationInterval);
            }
        }
    }

    // Initial delay before first burst
    setTimeout(runFontBurst, 3000);

    // Individual character hover effect (extra polish)
    chars.forEach(char => {
        char.addEventListener('mouseenter', () => {
            gsap.to(char, { 
                y: -10, 
                color: "#0C8CE9", 
                duration: 0.2 
            });
        });
        char.addEventListener('mouseleave', () => {
            gsap.to(char, { 
                y: 0, 
                color: "#161A1D", 
                duration: 0.5 
            });
        });
    });

    // Floating animation for stickers
    document.querySelectorAll('.float-anim').forEach((el, index) => {
        gsap.to(el, {
            y: "random(-15, 15)",
            x: "random(-10, 10)",
            rotation: "random(-5, 5)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2
        });
    });
});
