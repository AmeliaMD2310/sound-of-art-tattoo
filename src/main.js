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

            const linkUrl = new URL(href, window.location.origin);

            const isHomePath =
                pathname === '/' ||
                pathname.endsWith('/index.html') ||
                pathname.endsWith('/sound-of-art-tattoo/') ||
                pathname.endsWith('/sound-of-art-tattoo');

            const isLinkHome =
                linkUrl.pathname === '/' ||
                linkUrl.pathname.endsWith('/index.html') ||
                linkUrl.pathname.endsWith('/sound-of-art-tattoo/') ||
                linkUrl.pathname.endsWith('/sound-of-art-tattoo');

            // Highlight the current section link when the hash matches
            if (linkUrl.hash && linkUrl.hash === hash) {
                link.classList.add('text-teal-400', 'border-b-2', 'border-teal-500');
            }

            // Highlight the current page link only when there is no hash
            if (linkUrl.pathname === pathname && !linkUrl.hash && !hash) {
                link.classList.add('text-teal-400', 'border-b-2', 'border-teal-500');
            }

            // Highlight Home only when on the home page and there is no section hash
            if (isHomePath && isLinkHome && !linkUrl.hash && !hash) {
                link.classList.add('text-teal-400', 'border-b-2', 'border-teal-500');
            }
        });
    };

    // Add smooth scrolling to same-page anchor links and home-page hash links
    document.querySelectorAll('a[href^="#"], a[href^="/#"], a[href^="/sound-of-art-tattoo/#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href) return;

            const isSamePageHash = href.startsWith('#');
            const isHomeHashFromHome =
                (href.startsWith('/#') || href.startsWith('/sound-of-art-tattoo/#')) &&
                (
                    window.location.pathname === '/' ||
                    window.location.pathname.endsWith('/index.html') ||
                    window.location.pathname.endsWith('/sound-of-art-tattoo/') ||
                    window.location.pathname.endsWith('/sound-of-art-tattoo')
                );

            // If this is a same-page section link, prevent the normal jump
            if (isSamePageHash || isHomeHashFromHome) {
                e.preventDefault();

                const targetId = href
                    .replace('/sound-of-art-tattoo/#', '')
                    .replace('/#', '')
                    .replace('#', '');

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
// On mobile, shows 1 larger card at a time and allows fullscreen video viewing
// ============================================
export function initVideoCarousel() {
    const track = document.getElementById('video-track');
    const prevBtn = document.getElementById('prev-video');
    const nextBtn = document.getElementById('next-video');
    const container = document.getElementById('video-carousel-container');
    const lightbox = document.getElementById('video-lightbox');
    const lightboxVideo = document.getElementById('lightbox-video');
    const closeLightboxBtn = document.getElementById('close-video-lightbox');
    const lightboxPrevBtn = document.getElementById('lightbox-prev-video');
    const lightboxNextBtn = document.getElementById('lightbox-next-video');

    if (!track || !prevBtn || !nextBtn || !container) return;

    const cards = Array.from(track.querySelectorAll('[data-video-card]'));
    if (cards.length === 0) return;

    let currentIndex = 0;
    let lightboxIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    // Maximum number of cards we want visible on desktop
    const MAX_VISIBLE = 3;

    // Check whether the screen is mobile sized
    const isMobileView = () => window.innerWidth < 768;

    // Calculate how many cards should be visible
    const getVisibleCards = () => {
        return isMobileView() ? 1 : Math.min(cards.length, MAX_VISIBLE);
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

    // Load a specific card's video into the fullscreen lightbox
    const loadLightboxVideo = (index) => {
        if (!lightbox || !lightboxVideo) return;

        const card = cards[index];
        if (!card) return;

        const source = card.querySelector('source');
        const video = card.querySelector('video');
        if (!source || !video) return;

        lightboxVideo.pause();
        lightboxVideo.innerHTML = '';
        lightboxVideo.poster = video.getAttribute('poster') || '';

        // Enable sound in fullscreen mode
        lightboxVideo.muted = false;
        lightboxVideo.volume = 1;

        const newSource = document.createElement('source');
        newSource.src = source.getAttribute('src');
        newSource.type = source.getAttribute('type') || 'video/mp4';

        lightboxVideo.appendChild(newSource);
        lightboxVideo.load();

        const playPromise = lightboxVideo.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {});
        }
    };

    // Open video in fullscreen-style lightbox
    const openLightbox = (index) => {
        if (!lightbox || !lightboxVideo) return;

        lightboxIndex = index;
        loadLightboxVideo(lightboxIndex);

        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.style.overflow = 'hidden';
    };

    // Close fullscreen lightbox
    const closeLightbox = () => {
        if (!lightbox || !lightboxVideo) return;

        lightboxVideo.pause();
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        document.body.style.overflow = '';
    };

    // Move to next video inside fullscreen lightbox
    const nextLightboxVideo = () => {
        lightboxIndex = lightboxIndex >= cards.length - 1 ? 0 : lightboxIndex + 1;
        loadLightboxVideo(lightboxIndex);
    };

    // Move to previous video inside fullscreen lightbox
    const prevLightboxVideo = () => {
        lightboxIndex = lightboxIndex <= 0 ? cards.length - 1 : lightboxIndex - 1;
        loadLightboxVideo(lightboxIndex);
    };

    // Handle swipe gestures in fullscreen mode
    const handleLightboxSwipe = () => {
        const swipeDistance = touchEndX - touchStartX;

        // Ignore very small movements so taps do not trigger navigation
        if (Math.abs(swipeDistance) < 50) return;

        if (swipeDistance < 0) {
            nextLightboxVideo();
        } else {
            prevLightboxVideo();
        }
    };

    nextBtn.addEventListener('click', () => {
        // If lightbox is open, move through fullscreen videos
        if (lightbox && !lightbox.classList.contains('hidden')) {
            nextLightboxVideo();
            return;
        }

        const visible = getVisibleCards();
        const maxIndex = Math.max(0, cards.length - visible);

        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        // If lightbox is open, move through fullscreen videos
        if (lightbox && !lightbox.classList.contains('hidden')) {
            prevLightboxVideo();
            return;
        }

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

    // Make cards clickable on all screen sizes
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    if (closeLightboxBtn) {
        closeLightboxBtn.addEventListener('click', closeLightbox);
    }

    if (lightboxPrevBtn) {
        lightboxPrevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            prevLightboxVideo();
        });
    }

    if (lightboxNextBtn) {
        lightboxNextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            nextLightboxVideo();
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        lightbox.addEventListener('touchstart', (e) => {
            if (lightbox.classList.contains('hidden')) return;
            touchStartX = e.changedTouches[0].clientX;
        });

        lightbox.addEventListener('touchend', (e) => {
            if (lightbox.classList.contains('hidden')) return;
            touchEndX = e.changedTouches[0].clientX;
            handleLightboxSwipe();
        });
    }

    // Close lightbox on Escape and move between videos with arrow keys
    document.addEventListener('keydown', (e) => {
        if (!lightbox || lightbox.classList.contains('hidden')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        }

        if (e.key === 'ArrowRight') {
            nextLightboxVideo();
        }

        if (e.key === 'ArrowLeft') {
            prevLightboxVideo();
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