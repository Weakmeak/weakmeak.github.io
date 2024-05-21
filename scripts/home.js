document.addEventListener('DOMContentLoaded', () => {
    const ticker = document.querySelector('.ticker');
    const tickerItems = document.querySelectorAll('.ticker-item');
    const tickerWrap = document.querySelector('.ticker-wrap');

    const calculateAnimation = () => {
        let totalWidth = 0;
        tickerItems.forEach(item => {
            totalWidth += item.offsetWidth;
        });

        // Double the width to account for the seamless loop
        ticker.style.width = `${totalWidth * 2}px`;

        // Clone the items for seamless looping
        tickerItems.forEach(item => {
            const clone = item.cloneNode(true);
            ticker.appendChild(clone);
        });

        const animationDuration = totalWidth / tickerWrap.clientWidth * 20; // Adjust the speed factor as needed

        // Set the animation duration dynamically
        ticker.style.animation = `ticker ${animationDuration}s linear infinite`;
    };

    calculateAnimation();
    window.addEventListener('resize', () => {
        // Clear the clones before recalculating
        ticker.innerHTML = '';
        tickerItems.forEach(item => {
            ticker.appendChild(item);
        });
        calculateAnimation();
    });
});
