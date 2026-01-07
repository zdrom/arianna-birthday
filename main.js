document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const gagBtn = document.getElementById('gag-btn');

    const phases = {
        intro: document.getElementById('intro'),
        gag: document.getElementById('gag'),
        confirmation: document.getElementById('confirmation'),
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
        // First transition to the pre-gag interstitials
        switchPhase('intro', 'transition', 500);

        const transitionText = document.getElementById('transition-text');
        const preGagMessages = [
            "You know...",
            "Birthdays are special.",
            "And for a special person like you...",
            "I wanted to find something...",
            "...iconic.",
            "...world-class.",
            "...breathtaking.",
            "So, Arianna..."
        ];

        let delay = 1500;
        preGagMessages.forEach((msg, index) => {
            setTimeout(() => {
                transitionText.style.opacity = 0;
                setTimeout(() => {
                    transitionText.textContent = msg;
                    transitionText.style.opacity = 1;
                }, 300);
            }, delay * index);
        });

        setTimeout(() => {
            switchPhase('transition', 'gag', 500);
        }, delay * preGagMessages.length + 500);
    });

    gagBtn.addEventListener('click', () => {
        switchPhase('gag', 'confirmation', 500);
    });

    const continueLink = document.getElementById('continue-link');
    continueLink.addEventListener('click', (e) => {
        e.preventDefault();
        switchPhase('confirmation', 'transition', 500);

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
