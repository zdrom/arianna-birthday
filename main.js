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
        const messages = [
            "Wait a second...",
            "Did you really think...",
            "That I would take you to Dayton?",
            "For your birthday?",
            "In 2025?",
            "...actually I just wanted to see your reaction.",
            "Okay, for real now...",
            "Happy Birthday, Arianna."
        ];

        let delay = 1500;
        messages.forEach((msg, index) => {
            setTimeout(() => {
                transitionText.style.opacity = 0;
                setTimeout(() => {
                    transitionText.textContent = msg;
                    transitionText.style.opacity = 1;
                }, 300);
            }, delay * index);
        });

        setTimeout(() => {
            switchPhase('transition', 'realGift', 500);
            if (window.navigator.vibrate) {
                window.navigator.vibrate([100, 50, 100]);
            }
        }, delay * messages.length + 1000);
    });
});
