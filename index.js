const DOT_SIZE = 5;
const DOT_SPACING = 45;

function createDotGrid(width, height) {
    const container = document.getElementById('dotty-background');
    if (!container) return;

    container.innerHTML = '';

    const cols = Math.ceil(width / DOT_SPACING);
    const rows = Math.ceil(height / DOT_SPACING);
    const maxDots = cols * rows;

    for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            const left = col * DOT_SPACING + (DOT_SPACING - DOT_SIZE) / 2;
            const top = row * DOT_SPACING + (DOT_SPACING - DOT_SIZE) / 2;
            dot.style.left = `${left}px`;
            dot.style.top = `${top}px`;
            container.appendChild(dot);
        }
    }

    return maxDots;
}

function updateDotBackground() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    createDotGrid(width, height);
}

function debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

window.addEventListener('load', updateDotBackground);
window.addEventListener('resize', debounce(updateDotBackground, 100));
