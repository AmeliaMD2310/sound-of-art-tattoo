import { initNavigation } from './main.js';

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');

        if (!trigger || !content || !icon) return;

        trigger.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            faqItems.forEach(otherItem => {
                const otherContent = otherItem.querySelector('.faq-content');
                const otherIcon = otherItem.querySelector('.faq-icon');
                const otherTrigger = otherItem.querySelector('.faq-trigger');

                otherItem.classList.remove('is-open');
                if (otherContent) {
                    otherContent.style.maxHeight = '0px';
                }
                if (otherIcon) {
                    otherIcon.style.transform = 'rotate(0deg)';
                }
                if (otherTrigger) {
                    otherTrigger.setAttribute('aria-expanded', 'false');
                }
            });

            if (!isOpen) {
                item.classList.add('is-open');
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initFAQ();
});
