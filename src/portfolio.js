import { initNavigation } from './main.js';

const portfolioData = [
    { id: 1, title: 'Blue Eyed Lion', categories: ['realism', 'color'], image: 'public/img/Portfolio15.jpeg' },
    { id: 2, title: 'Johnny Cash Tribute', categories: ['bw', 'portrait'], image: 'public/img/Portfolio14.jpeg' },
    { id: 3, title: 'Religious Upper Arm Tattoo', categories: ['bw'], image: 'public/img/Portfolio13.jpeg' },
    { id: 4, title: 'Greek Goddess Athena', categories: ['realism', 'bw'], image: 'public/img/Portfolio12.jpeg' },
    { id: 5, title: 'Sea Turtle', categories: ['bw', 'realism'], image: 'public/img/Portfolio11.jpeg' },
    { id: 6, title: 'Watching Time', categories: ['realism', 'bw'], image: 'public/img/Portfolio10.jpeg' },
    { id: 7, title: 'Nordic Wolf', categories: ['realism', 'bw'], image: 'public/img/Portfolio7.jpeg' },
    { id: 8, title: 'Nautical Sleeve', categories: ['realism', 'bw'], image: 'public/img/Portfolio8.jpeg' },
    { id: 9, title: 'Fierce Lion', categories: ['realism', 'bw'], image: 'public/img/Portfolio4.jpeg' },
    { id: 10, title: 'Memorial Cat Portrait', categories: ['color', 'portrait'], image: 'public/img/Portfolio9.jpeg' },
    { id: 11, title: 'Warrior Woman', categories: ['realism', 'bw'], image: 'public/img/Portfolio5.jpeg' },
    { id: 12, title: 'Red Phoenix', categories: ['color'], image: 'public/img/Portfolio16.jpeg' },
];

function renderPortfolio(filter = 'all') {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const filteredData = filter === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.categories.includes(filter));

    filteredData.forEach((item, index) => {
        const card = document.createElement('div');
        const rotation = (index % 2 === 0 ? -1 : 1) * (Math.random() * 2);
        card.className = 'group relative overflow-hidden bg-zinc-900 aspect-[3/4] cursor-pointer distressed-border transition-transform duration-300 hover:scale-[1.02] z-10 hover:z-20';
        card.style.transform = `rotate(${rotation}deg)`;
        
        const categoryLabel = item.categories.map(cat => 
            cat === 'bw' ? 'Black & White' : cat.charAt(0).toUpperCase() + cat.slice(1)
        ).join(' • ');

        card.innerHTML = `
            <img 
                src="${item.image}" 
                alt="${item.title}" 
                class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                referrerpolicy="no-referrer"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span class="text-teal-400 grunge-text text-sm uppercase tracking-widest mb-2">${categoryLabel}</span>
                <h3 class="rock-text text-3xl tracking-tight text-zinc-100">${item.title}</h3>
            </div>
            <!-- Gritty Overlay on Card -->
            <div class="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
        `;
        grid.appendChild(card);
    });
}

function initPortfolio() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.currentTarget;
            const filter = target.getAttribute('data-filter') || 'all';

            // Update active state
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-teal-600', 'text-zinc-950', 'border-teal-600', 'shadow-[4px_4px_0_rgba(0,0,0,0.5)]');
            });
            target.classList.add('active', 'bg-teal-600', 'text-zinc-950', 'border-teal-600', 'shadow-[4px_4px_0_rgba(0,0,0,0.5)]');

            renderPortfolio(filter);
        });
    });

    renderPortfolio();
}

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initPortfolio();
});
