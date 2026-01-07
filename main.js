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
            "Are you ready...",
            "To experience the divine culture?",
            "To see 5,000 years of civilization...",
            "Reborn?",
            "Through breathtaking dance...",
            "And thunderous drums...",
            "Across the ancient lands...",
            "Before the era of communism.",
            "A performance that will...",
            "...touch your soul.",
            "A once-in-a-lifetime journey.",
            "A gift from the Heavens.",
            "Direct from the world's premier...",
            "Chinese dance company.",
            "And now, Arianna...",
            "The magic begins."
        ];

        let delay = 1800; // Slightly slower for more "drag"
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
            "I'd actually take you to see Shen Yun?",
            "In Dayton, Ohio?",
            "...",
            "Actually, I just wanted to see that look on your face.",
            "Okay, for real now.",
            "Take a deep breath.",
            "Because we're leaving the divine culture behind...",
            "And heading somewhere different.",
            "Somewhere atmospheric.",
            "Somewhere soulful.",
            "Somewhere we can disappear.",
            "Just for a little while.",
            "Are you ready for your real gift?",
            "Happy Birthday, Arianna."
        ];

        let delay = 2000;
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
