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
        switchPhase('intro', 'transition', 1000);

        const transitionText = document.getElementById('transition-text');
        const preGagMessages = [
            "Are you ready...",
            "To witness a location like no other?",
            "A hidden gem...",
            "Rich in vibrant history...",
            "And sophisticated charm.",
            "The jewel of the Midwest.",
            "But that's not all.",
            "We're going there...",
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
            "Chinese dance company."
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
        switchPhase('confirmation', 'transition', 1000);

        const transitionText = document.getElementById('transition-text');
        const messages = [
            "Okay, for real now.",
            "Take a deep breath.",
            "We're heading north...",
            "To a place of old world charm.",
            "Where the streets are paved with cobblestone...",
            "And the air fills with French.",
            "Pack your bags, Arianna.",
            "We're going on an adventure."
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
