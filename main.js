document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const gagBtn = document.getElementById('gag-btn');
    
    const phases = {
        intro: document.getElementById('intro'),
        gag: document.getElementById('gag'),
        transition: document.getElementById('transition'),
        realGift: document.getElementById('real-gift')
    };

    function switchPhase(from, to, delay = 0) {
        phases[from].classList.remove('active');
        setTimeout(() => {
            phases[to].classList.add('active');
        }, delay);
    }

    startBtn.addEventListener('click', () => {
        switchPhase('intro', 'gag', 500);
    });

    gagBtn.addEventListener('click', () => {
        switchPhase('gag', 'transition', 500);
        
        const transitionText = document.getElementById('transition-text');
        
        setTimeout(() => {
            transitionText.textContent = "Just kidding...";
        }, 1500);

        setTimeout(() => {
            transitionText.textContent = "I have something better.";
        }, 3000);

        setTimeout(() => {
            switchPhase('transition', 'realGift', 500);
            // Trigger haptic-like vibration if supported
            if (window.navigator.vibrate) {
                window.navigator.vibrate([100, 50, 100]);
            }
        }, 4500);
    });
});
