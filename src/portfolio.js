import { initNavigation } from './main.js';

const portfolioData = [
    { id: 191, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio226.jpeg' },
    { id: 190, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio5.jpeg' },
    { id: 189, title: '', categories: ['color', 'realism'], image: 'img/Portfolio9.jpeg' },
    { id: 188, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio10.jpeg' },
    { id: 187, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio11.jpeg' },
    { id: 186, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio12.jpeg' },
    { id: 185, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio13.jpeg' },
    { id: 184, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio14.jpeg' },
    { id: 183, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio15.jpeg' },
    { id: 182, title: '', categories: ['color'], image: 'img/Portfolio16.jpeg' },
    { id: 181, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio17.jpeg' },
    { id: 180, title: '', categories: ['color'], image: 'img/Portfolio18.jpeg' },
    { id: 179, title: '', categories: ['color', 'realism'], image: 'img/Portfolio20.jpeg' },
    { id: 178, title: '', categories: ['color'], image: 'img/Portfolio21.jpeg' },
    { id: 177, title: '', categories: ['color'], image: 'img/Portfolio22.jpeg' },
    { id: 176, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio24.jpeg' },
    { id: 175, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio25.jpeg' },
    { id: 174, title: '', categories: ['bg'], image: 'img/Portfolio26.jpeg' },
    { id: 173, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio27.jpeg' },
    { id: 172, title: '', categories: ['color', 'realism'], image: 'img/Portfolio28.jpeg' },
    { id: 171, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio29.jpeg' },
    { id: 170, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio30.jpeg' },
    { id: 169, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio31.jpeg' },
    { id: 168, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio32.jpeg' },
    { id: 167, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio33.jpeg' },
    { id: 166, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio34.jpeg' },
    { id: 165, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio35.jpeg' },
    { id: 164, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio36.jpeg' },
    { id: 163, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio37.jpeg' },
    { id: 162, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio38.jpeg' },
    { id: 161, title: '', categories: ['bg'], image: 'img/Portfolio39.jpeg' },
    { id: 160, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio40.jpeg' },
    { id: 159, title: '', categories: ['color'], image: 'img/Portfolio41.jpeg' },
    { id: 158, title: '', categories: ['color'], image: 'img/Portfolio42.jpeg' },
    { id: 157, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio43.jpeg' },
    { id: 156, title: '', categories: ['color', 'realism'], image: 'img/Portfolio44.jpeg' },
    { id: 155, title: '', categories: ['color', 'realism'], image: 'img/Portfolio45.jpeg' },
    { id: 154, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio46.jpeg' },
    { id: 153, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio47.jpeg' },
    { id: 152, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio48.jpeg' },
    { id: 151, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio49.jpeg' },
    { id: 150, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio50.jpeg' },
    { id: 149, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio51.jpeg' },
    { id: 148, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio52.jpeg' },
    { id: 147, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio53.jpeg' },
    { id: 146, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio56.jpeg' },
    { id: 145, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio57.jpeg' },
    { id: 144, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio58.jpeg' },
    { id: 143, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio59.jpeg' },
    { id: 142, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio60.jpeg' },
    { id: 141, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio62.jpeg' },
    { id: 140, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio63.jpeg' },
    { id: 139, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio64.jpeg' },
    { id: 138, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio65.jpeg' },
    { id: 137, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio67.jpeg' },
    { id: 136, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio68.jpeg' },
    { id: 135, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio70.jpeg' },
    { id: 134, title: '', categories: ['color', 'realism'], image: 'img/Portfolio71.jpeg' },
    { id: 133, title: '', categories: ['color', 'realism'], image: 'img/Portfolio74.jpeg' },
    { id: 132, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio75.jpeg' },
    { id: 131, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio76.jpeg' },
    { id: 130, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio77.jpeg' },
    { id: 129, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio78.jpeg' },
    { id: 128, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio81.jpeg' },
    { id: 127, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio82.jpeg' },
    { id: 126, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio83.jpeg' },
    { id: 125, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio84.jpeg' },
    { id: 124, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio85.jpeg' },
    { id: 123, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio86.jpeg' },
    { id: 122, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio87.jpeg' },
    { id: 121, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio88.jpeg' },
    { id: 120, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio89.jpeg' },
    { id: 119, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio91.jpeg' },
    { id: 118, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio92.jpeg' },
    { id: 117, title: '', categories: ['color', 'realism'], image: 'img/Portfolio93.jpeg' },
    { id: 116, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio94.jpeg' },
    { id: 115, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio95.jpeg' },
    { id: 114, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio96.jpeg' },
    { id: 113, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio99.jpeg' },
    { id: 112, title: '', categories: ['color'], image: 'img/Portfolio100.jpeg' },
    { id: 111, title: '', categories: ['color'], image: 'img/Portfolio101.jpeg' },
    { id: 110, title: '', categories: ['color'], image: 'img/Portfolio102.jpeg' },
    { id: 109, title: '', categories: ['color'], image: 'img/Portfolio103.jpeg' },
    { id: 108, title: '', categories: ['color'], image: 'img/Portfolio104.jpeg' },
    { id: 107, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio105.jpeg' },
    { id: 106, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio106.jpeg' },
    { id: 105, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio108.jpeg' },
    { id: 104, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio110.jpeg' },
    { id: 103, title: '', categories: ['color', 'realism'], image: 'img/Portfolio111.jpeg' },
    { id: 102, title: '', categories: ['color', 'realism'], image: 'img/Portfolio112.jpeg' },
    { id: 101, title: '', categories: ['color', 'realism'], image: 'img/Portfolio113.jpeg' },
    { id: 100, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio114.jpeg' },
    { id: 99, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio116.jpeg' },
    { id: 98, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio117.jpeg' },
    { id: 97, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio118.jpeg' },
    { id: 96, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio119.jpeg' },
    { id: 95, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio120.jpeg' },
    { id: 94, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio121.jpeg' },
    { id: 93, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio123.jpeg' },
    { id: 92, title: '', categories: ['bg'], image: 'img/Portfolio124.jpeg' },
    { id: 91, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio125.jpeg' },
    { id: 90, title: '', categories: ['bg'], image: 'img/Portfolio126.jpeg' },
    { id: 89, title: '', categories: ['color', 'realism'], image: 'img/Portfolio127.jpeg' },
    { id: 88, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio128.jpeg' },
    { id: 87, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio129.jpeg' },
    { id: 86, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio130.jpeg' },
    { id: 85, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio131.jpeg' },
    { id: 84, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio132.jpeg' },
    { id: 83, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio133.jpeg' },
    { id: 82, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio134.jpeg' },
    { id: 81, title: '', categories: ['color'], image: 'img/Portfolio135.jpeg' },
    { id: 80, title: '', categories: ['color'], image: 'img/Portfolio136.jpeg' },
    { id: 79, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio137.jpeg' },
    { id: 78, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio138.jpeg' },
    { id: 77, title: '', categories: ['bg'], image: 'img/Portfolio139.jpeg' },
    { id: 76, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio140.jpeg' },
    { id: 75, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio141.jpeg' },
    { id: 74, title: '', categories: ['bg'], image: 'img/Portfolio142.jpeg' },
    { id: 73, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio143.jpeg' },
    { id: 72, title: '', categories: ['color'], image: 'img/Portfolio144.jpeg' },
    { id: 71, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio145.jpeg' },
    { id: 70, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio146.jpeg' },
    { id: 69, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio147.jpeg' },
    { id: 68, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio148.jpeg' },
    { id: 67, title: '', categories: ['color'], image: 'img/Portfolio149.jpeg' },
    { id: 66, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio150.jpeg' },
    { id: 65, title: '', categories: ['color'], image: 'img/Portfolio151.jpeg' },
    { id: 64, title: '', categories: ['color', 'realism'], image: 'img/Portfolio152.jpeg' },
    { id: 63, title: '', categories: ['color', 'realism'], image: 'img/Portfolio153.jpeg' },
    { id: 62, title: '', categories: ['color', 'realism'], image: 'img/Portfolio154.jpeg' },
    { id: 61, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio155.jpeg' },
    { id: 60, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio156.jpeg' },
    { id: 59, title: '', categories: ['color', 'realism'], image: 'img/Portfolio157.jpeg' },
    { id: 58, title: '', categories: ['bg'], image: 'img/Portfolio158.jpeg' },
    { id: 57, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio159.jpeg' },
    { id: 56, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio160.jpeg' },
    { id: 55, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio161.jpeg' },
    { id: 54, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio162.jpeg' },
    { id: 53, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio163.jpeg' },
    { id: 52, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio164.jpeg' },
    { id: 51, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio165.jpeg' },
    { id: 50, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio166.jpeg' },
    { id: 49, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio167.jpeg' },
    { id: 48, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio168.jpeg' },
    { id: 47, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio169.jpeg' },
    { id: 46, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio170.jpeg' },
    { id: 45, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio171.jpeg' },
    { id: 44, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio172.jpeg' },
    { id: 43, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio173.jpeg' },
    { id: 42, title: '', categories: ['color'], image: 'img/Portfolio174.jpeg' },
    { id: 41, title: '', categories: ['color', 'realism'], image: 'img/Portfolio175.jpeg' },
    { id: 40, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio176.jpeg' },
    { id: 39, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio177.jpeg' },
    { id: 38, title: '', categories: ['bg', 'color', 'realism'], image: 'img/Portfolio178.jpeg' },
    { id: 37, title: '', categories: ['color'], image: 'img/Portfolio179.jpeg' },
    { id: 36, title: '', categories: ['color', 'realism'], image: 'img/Portfolio180.jpeg' },
    { id: 35, title: '', categories: ['color', 'realism'], image: 'img/Portfolio181.jpeg' },
    { id: 34, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio182.jpeg' },
    { id: 33, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio183.jpeg' },
    { id: 32, title: '', categories: ['bg'], image: 'img/Portfolio184.jpeg' },
    { id: 31, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio185.jpeg' },
    { id: 30, title: '', categories: ['bg', 'color', 'realism'], image: 'img/Portfolio186.jpeg' },
    { id: 29, title: '', categories: ['color', 'realism'], image: 'img/Portfolio187.jpeg' },
    { id: 28, title: '', categories: ['color'], image: 'img/Portfolio188.jpeg' },
    { id: 27, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio189.jpeg' },
    { id: 26, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio200.jpeg' },
    { id: 25, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio201.jpeg' },
    { id: 24, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio202.jpeg' },
    { id: 23, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio203.jpeg' },
    { id: 22, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio204.jpeg' },
    { id: 21, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio205.jpeg' },
    { id: 20, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio206.jpeg' },
    { id: 19, title: '', categories: ['color', 'realism'], image: 'img/Portfolio207.jpeg' },
    { id: 18, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio208.jpeg' },
    { id: 17, title: '', categories: ['bg'], image: 'img/Portfolio209.jpeg' },
    { id: 16, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio210.jpeg' },
    { id: 15, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio211.jpeg' },
    { id: 14, title: '', categories: ['bg'], image: 'img/Portfolio212.jpeg' },
    { id: 13, title: '', categories: ['color', 'realism'], image: 'img/Portfolio213.jpeg' },
    { id: 12, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio214.jpeg' },
    { id: 11, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio215.jpeg' },
    { id: 10, title: '', categories: ['bg'], image: 'img/Portfolio216.jpeg' },
    { id: 9, title: '', categories: ['color'], image: 'img/Portfolio217.jpeg' },
    { id: 8, title: '', categories: ['color'], image: 'img/Portfolio218.jpeg' },
    { id: 7, title: '', categories: ['bg', 'color', 'realism'], image: 'img/Portfolio219.jpeg' },
    { id: 6, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio220.jpeg' },
    { id: 5, title: '', categories: ['color', 'realism'], image: 'img/Portfolio221.jpeg' },
    { id: 4, title: '', categories: ['color'], image: 'img/Portfolio222.jpeg' },
    { id: 3, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio223.jpeg' },
    { id: 2, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio224.jpeg' },
    { id: 1, title: '', categories: ['bg', 'realism'], image: 'img/Portfolio225.jpeg' },
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

    title.textContent = item.title;
    category.textContent = formatCategories(item.categories);

    image.classList.add('opacity-0');
    figure.classList.remove('animate__animated', 'animate__zoomIn', 'animate__faster');

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

        card.innerHTML = `
            <div class="portfolio-reveal group relative overflow-hidden bg-zinc-900 aspect-[3/4] distressed-border transition-transform duration-300 hover:scale-[1.01] hover:z-20 will-change-transform">
                <img
                    src="${item.image}"
                    alt="${item.title}"
                    class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 will-change-transform [transform:translateZ(0)] [backface-visibility:hidden]"
                    referrerpolicy="no-referrer"
                    draggable="false"
                >
                <div class="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
            </div>
        `;

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
                b.classList.remove('active', 'bg-[#B38B34]', 'text-zinc-950', 'border-[#B38B34]', 'shadow-[4px_4px_0_rgba(0,0,0,0.5)]');
            });

            target.classList.add('active', 'bg-[#B38B34]', 'text-zinc-950', 'border-[#B38B34]', 'shadow-[4px_4px_0_rgba(0,0,0,0.5)]');

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