// ============================================
// Mobile navigation + smooth scrolling
// ============================================
export function initNavigation() {
    // Mobile menu elements
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Only run this if all required mobile menu elements exist
    if (mobileMenuBtn && closeMenuBtn && mobileMenu) {
        // Open mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100');
        });

        // Close mobile menu
        const closeMenu = () => {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100');
        };

        // Close button
        closeMenuBtn.addEventListener('click', closeMenu);

        // Also close the menu when any mobile link is clicked
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Smooth scroll helper for anchor links like #about or #contact
    const smoothScroll = (targetId) => {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerOffset = 80; // fixed header height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Update the active navigation link based on page path and hash
    const updateActiveNav = () => {
        const desktopLinks = document.querySelectorAll('header nav a');
        const mobileLinks = document.querySelectorAll('#mobile-menu a');
        const allLinks = [...desktopLinks, ...mobileLinks];

        const pathname = window.location.pathname;
        const hash = window.location.hash;

        // Clear active styles from all nav links first
        allLinks.forEach(link => {
            link.classList.remove('text-teal-400', 'border-b-2', 'border-teal-500');
        });

        // Check which page/section is currently active
        allLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;

            const isHomePage =
                pathname === '/' ||
                pathname.endsWith('/index.html');

            // Highlight Home only when on the home page with no hash
            if (
                (href === '/' || href === '/index.html') &&
                isHomePage &&
                !hash
            ) {
                link.classList.add('text-teal-400', 'border-b-2', 'border-teal-500');
            }

            // Highlight About when the URL hash is #about
            if (
                (href === '#about' || href === '/#about') &&
                hash === '#about'
            ) {
                link.classList.add('text-teal-400', 'border-b-2', 'border-teal-500');
            }

            // Highlight Contact when the URL hash is #contact
            if (
                (href === '#contact' || href === '/#contact') &&
                hash === '#contact'
            ) {
                link.classList.add('text-teal-400', 'border-b-2', 'border-teal-500');
            }

            // Highlight Portfolio when on portfolio.html
            if (
                href === '/portfolio.html' &&
                pathname.endsWith('/portfolio.html')
            ) {
                link.classList.add('text-teal-400', 'border-b-2', 'border-teal-500');
            }

            // Highlight FAQ when on faq.html
            if (
                href === '/faq.html' &&
                pathname.endsWith('/faq.html')
            ) {
                link.classList.add('text-teal-400', 'border-b-2', 'border-teal-500');
            }

            // Highlight Aftercare when on aftercare.html
            if (
                href === '/aftercare.html' &&
                pathname.endsWith('/aftercare.html')
            ) {
                link.classList.add('text-teal-400', 'border-b-2', 'border-teal-500');
            }
        });
    };

    // Add smooth scrolling to same-page anchor links and home-page hash links
    document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href) return;

            const isSamePageHash = href.startsWith('#');
            const isHomeHashFromHome =
                href.startsWith('/#') &&
                (window.location.pathname === '/' || window.location.pathname.endsWith('/index.html'));

            // If this is a same-page section link, prevent the normal jump
            if (isSamePageHash || isHomeHashFromHome) {
                e.preventDefault();

                const targetId = href.replace('/#', '').replace('#', '');

                history.pushState(null, '', `#${targetId}`);
                smoothScroll(targetId);
                updateActiveNav();
            }
        });
    });

    // If page loads with a hash in the URL, scroll to that section
    if (window.location.hash) {
        const initialTargetId = window.location.hash.substring(1);
        setTimeout(() => smoothScroll(initialTargetId), 100);
    }

    // Update nav state when hash changes
    window.addEventListener('hashchange', updateActiveNav);

    // Set the correct active nav link on page load
    updateActiveNav();
}

// ============================================
// Splash screen logic
// Shows once per session, then stays hidden
// ============================================
export function initSplashScreen() {
    const splash = document.getElementById('splash-screen');
    const enterBtn = document.getElementById('enter-btn');

    // Stop if splash elements do not exist on this page
    if (!splash || !enterBtn) return;

    // Check if the splash has already been seen in this browser session
    const splashSeen = sessionStorage.getItem('soundOfArtSplashSeen') === 'true';

    // Helper function to hide the splash screen
    const hideSplash = () => {
        splash.classList.add('hidden');
        splash.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    };

    // If the splash was already shown before, hide it immediately
    if (splashSeen) {
        hideSplash();
        return;
    }

    // Prevent scrolling while splash is visible
    document.body.style.overflow = 'hidden';

    // When user clicks Enter, save splash state and hide it
    enterBtn.addEventListener('click', () => {
        sessionStorage.setItem('soundOfArtSplashSeen', 'true');
        document.documentElement.classList.add('splash-seen');
        hideSplash();
    });
}

// ============================================
// Video carousel logic
// Always shows up to 3 cards unless there are fewer than 3, in which case it shows only those
// ============================================
export function initVideoCarousel() {
    const track = document.getElementById('video-track');
    const prevBtn = document.getElementById('prev-video');
    const nextBtn = document.getElementById('next-video');
    const container = document.getElementById('video-carousel-container');

    if (!track || !prevBtn || !nextBtn || !container) return;

    const cards = Array.from(track.querySelectorAll('[data-video-card]'));
    if (cards.length === 0) return;

    let currentIndex = 0;

    // Maximum number of cards we want visible
    const MAX_VISIBLE = 3;

    // Calculate how many cards should be visible
    const getVisibleCards = () => {
        return Math.min(cards.length, MAX_VISIBLE);
    };

    // Set card widths so the visible cards fill the container
    const setCardWidths = () => {
        const visible = getVisibleCards();
        const trackStyles = window.getComputedStyle(track);
        const gap = parseFloat(trackStyles.columnGap || trackStyles.gap || '0');

        const totalGap = gap * (visible - 1);
        const cardWidth = (container.offsetWidth - totalGap) / visible;

        cards.forEach(card => {
            card.style.minWidth = `${cardWidth}px`;
            card.style.width = `${cardWidth}px`;
            card.style.flexShrink = '0';
        });
    };

    const getCardWidth = () => {
        const firstCard = cards[0];
        const trackStyles = window.getComputedStyle(track);
        const gap = parseFloat(trackStyles.columnGap || trackStyles.gap || '0');
        return firstCard.getBoundingClientRect().width + gap;
    };

    const updateCarousel = () => {
        const visible = getVisibleCards();
        const maxIndex = Math.max(0, cards.length - visible);

        currentIndex = Math.min(currentIndex, maxIndex);

        const offset = -(currentIndex * getCardWidth());
        track.style.transform = `translateX(${offset}px)`;
    };

    nextBtn.addEventListener('click', () => {
        const visible = getVisibleCards();
        const maxIndex = Math.max(0, cards.length - visible);

        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        const visible = getVisibleCards();
        const maxIndex = Math.max(0, cards.length - visible);

        currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
        updateCarousel();
    });

    // Autoplay all videos
    cards.forEach(card => {
        const video = card.querySelector('video');
        if (!video) return;

        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {});
        }
    });

    // Resize handler
    window.addEventListener('resize', () => {
        setCardWidths();
        updateCarousel();
    });

    setCardWidths();
    updateCarousel();
}