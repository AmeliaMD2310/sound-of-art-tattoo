import { initNavigation } from './main.js';

const portfolioData = [
    { id: 1, title: 'Blue Eyed Lion', categories: ['realism', 'color'], image: 'img/Portfolio15.jpeg' },
    { id: 2, title: 'Johnny Cash Tribute', categories: ['bg', 'portrait'], image: 'img/Portfolio14.jpeg' },
    { id: 3, title: 'Religious Upper Arm Tattoo', categories: ['bg'], image: 'img/Portfolio13.jpeg' },
    { id: 4, title: 'Greek Goddess Athena', categories: ['realism', 'bg'], image: 'img/Portfolio12.jpeg' },
    { id: 5, title: 'Sea Turtle', categories: ['bg', 'realism'], image: 'img/Portfolio11.jpeg' },
    { id: 6, title: 'Watching Time', categories: ['realism', 'bg'], image: 'img/Portfolio10.jpeg' },
    { id: 7, title: 'Nordic Wolf', categories: ['realism', 'bg'], image: 'img/Portfolio7.jpeg' },
    { id: 8, title: 'Nautical Sleeve', categories: ['realism', 'bg'], image: 'img/Portfolio8.jpeg' },
    { id: 9, title: 'Fierce Lion', categories: ['realism', 'bg'], image: 'img/Portfolio4.jpeg' },
    { id: 10, title: 'Memorial Cat Portrait', categories: ['color', 'portrait'], image: 'img/Portfolio9.jpeg' },
    { id: 11, title: 'Warrior Woman', categories: ['realism', 'bg'], image: 'img/Portfolio5.jpeg' },
    { id: 12, title: 'Red Phoenix', categories: ['color'], image: 'img/Portfolio16.jpeg' },
];

let currentLightboxItems = [];
let currentLightboxIndex = 0;

// Format category names for display
function formatCategories(categories) {
    return categories.map(cat =>
        cat === 'bg' ? 'Black & Grey' : cat.charAt(0).toUpperCase() + cat.slice(1)
    ).join(' • ');
}

// Scroll reveal animation for portfolio cards
function initPortfolioReveal() {
    const revealItems = document.querySelectorAll('.portfolio-reveal');

    if (revealItems.length === 0) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add(
                'animate__animated',
                'animate__zoomIn',
                'animate__fast',
                'is-visible'
            );

            obs.unobserve(entry.target);
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealItems.forEach(item => observer.observe(item));
}

// Open the lightbox modal with the selected image
function openLightbox(index) {
    const lightbox = document.getElementById('portfolio-lightbox');
    const figure = document.getElementById('lightbox-figure');
    const image = document.getElementById('lightbox-image');
    const title = document.getElementById('lightbox-title');
    const category = document.getElementById('lightbox-category');

    if (!lightbox || !figure || !image || !title || !category || currentLightboxItems.length === 0) return;

    currentLightboxIndex = index;
    const item = currentLightboxItems[currentLightboxIndex];

    // Prepare text first
    title.textContent = item.title;
    category.textContent = formatCategories(item.categories);

    // Reset current image state so it does not flash/stutter
    image.classList.add('opacity-0');
    figure.classList.remove('animate__animated', 'animate__zoomIn', 'animate__faster');

    // Preload the image before showing it
    const preloadImage = new Image();
    preloadImage.src = item.image;

    preloadImage.onload = () => {
        image.src = item.image;
        image.alt = item.title;

        lightbox.classList.remove('opacity-0', 'pointer-events-none');
        lightbox.classList.add('opacity-100');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        requestAnimationFrame(() => {
            figure.classList.add('animate__animated', 'animate__zoomIn', 'animate__faster');
            image.classList.remove('opacity-0');
        });
    };
}

// Close the lightbox modal
function closeLightbox() {
    const lightbox = document.getElementById('portfolio-lightbox');
    const figure = document.getElementById('lightbox-figure');
    const image = document.getElementById('lightbox-image');

    if (!lightbox) return;

    lightbox.classList.add('opacity-0', 'pointer-events-none');
    lightbox.classList.remove('opacity-100');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (figure) {
        figure.classList.remove('animate__animated', 'animate__zoomIn', 'animate__faster');
    }

    if (image) {
        image.classList.add('opacity-0');
    }
}

// Show previous image in lightbox
function showPreviousImage() {
    if (currentLightboxItems.length === 0) return;

    currentLightboxIndex =
        currentLightboxIndex <= 0
            ? currentLightboxItems.length - 1
            : currentLightboxIndex - 1;

    openLightbox(currentLightboxIndex);
}

// Show next image in lightbox
function showNextImage() {
    if (currentLightboxItems.length === 0) return;

    currentLightboxIndex =
        currentLightboxIndex >= currentLightboxItems.length - 1
            ? 0
            : currentLightboxIndex + 1;

    openLightbox(currentLightboxIndex);
}

// Lightbox controls: close, next, previous, keyboard support
function initLightboxControls() {
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    const backdrop = document.getElementById('lightbox-backdrop');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', showPreviousImage);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', showNextImage);
    }

    if (backdrop) {
        backdrop.addEventListener('click', closeLightbox);
    }

    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('portfolio-lightbox');
        if (!lightbox || lightbox.getAttribute('aria-hidden') === 'true') return;

        if (e.key === 'Escape') {
            closeLightbox();
        }

        if (e.key === 'ArrowLeft') {
            showPreviousImage();
        }

        if (e.key === 'ArrowRight') {
            showNextImage();
        }
    });
}

// Render portfolio cards based on active filter
function renderPortfolio(filter = 'all') {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const filteredData = filter === 'all'
        ? portfolioData
        : portfolioData.filter(item => item.categories.includes(filter));

    currentLightboxItems = filteredData;

    filteredData.forEach((item, index) => {
        const card = document.createElement('div');
        const rotation = (index % 2 === 0 ? -1 : 1) * (Math.random() * 2);

        card.className = 'relative z-10 cursor-pointer';
        card.style.transform = `rotate(${rotation}deg)`;

        const categoryLabel = formatCategories(item.categories);

        card.innerHTML = `
            <div class="portfolio-reveal group relative overflow-hidden bg-zinc-900 aspect-[3/4] distressed-border transition-transform duration-300 hover:scale-[1.01] hover:z-20 will-change-transform">
                <img
                    src="${item.image}"
                    alt="${item.title}"
                    class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 will-change-transform [transform:translateZ(0)] [backface-visibility:hidden]"
                    referrerpolicy="no-referrer"
                    draggable="false"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 pointer-events-none">
                    <span class="text-teal-400 grunge-text text-sm uppercase tracking-widest mb-2">${categoryLabel}</span>
                    <h3 class="rock-text text-3xl tracking-tight text-zinc-100">${item.title}</h3>
                </div>
                <div class="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
            </div>
        `;

        // Attach click to outer wrapper instead of inner animated element
        card.addEventListener('click', () => {
            openLightbox(index);
        });

        grid.appendChild(card);
    });

    initPortfolioReveal();
}

// Portfolio filter button setup
function initPortfolio() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.currentTarget;
            const filter = target.getAttribute('data-filter') || 'all';

            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-teal-600', 'text-zinc-950', 'border-teal-600', 'shadow-[4px_4px_0_rgba(0,0,0,0.5)]');
            });

            target.classList.add('active', 'bg-teal-600', 'text-zinc-950', 'border-teal-600', 'shadow-[4px_4px_0_rgba(0,0,0,0.5)]');

            renderPortfolio(filter);
        });
    });

    renderPortfolio();
}

// Page initialization
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initLightboxControls();
    initPortfolio();
});