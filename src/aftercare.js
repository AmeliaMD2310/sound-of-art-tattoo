import { initNavigation } from './main.js';

function initAftercareAccordion() {
    const items = document.querySelectorAll('.aftercare-item');

    items.forEach(item => {
        const trigger = item.querySelector('.aftercare-trigger');
        const content = item.querySelector('.aftercare-content');
        const icon = item.querySelector('.aftercare-icon');

        trigger.addEventListener('click', () => {
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

            items.forEach(otherItem => {
                const otherContent = otherItem.querySelector('.aftercare-content');
                const otherIcon = otherItem.querySelector('.aftercare-icon');

                otherContent.style.maxHeight = '0px';
                otherIcon.style.transform = 'rotate(0deg)';
            });

            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.style.maxHeight = '0px';
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initAftercareAccordion();
});