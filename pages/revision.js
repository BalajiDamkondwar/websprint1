/**
 * pages/revision.js — Neubrutalist Multiverse Revision Deck
 */
window.AppPages = window.AppPages || {};

window.AppPages['revision'] = {
    render() {
        return `
            <div class="revision-page-wrapper">
                <!-- Header Banner Card -->
                <div class="revision-header-card neo-card">
                    <div class="badge-yellow-sm mb-2">SPACED REPETITION ENGINE</div>
                    <div class="revision-title-row">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffe600" stroke-width="2.5" stroke-linecap="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <h1 class="revision-hero-title">MULTIVERSE REVISION DECK</h1>
                    </div>
                    <p class="revision-hero-subtitle">
                        REINFORCE NEURAL PATHWAYS FROM COMPLETED MISSIONS, AI TRANSCRIPT BREAKDOWNS, AND MASTERY QUIZZES
                    </p>
                </div>

                <!-- Section Header -->
                <div class="revision-section-header">
                    <div class="sec-left">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff0044" stroke-width="2.5" stroke-linecap="round">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                        <h2 class="revision-section-title">COMPLETED MISSIONS & STUDY DECKS</h2>
                    </div>
                    <span class="revision-saved-count">0 MISSIONS SAVED</span>
                </div>

                <!-- Main Content Card -->
                <div class="neo-card revision-empty-card">
                    <div class="empty-book-icon-wrap">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </svg>
                    </div>
                    <h3 class="empty-revision-title">YOUR MULTIVERSE REVISION QUEUE IS EMPTY</h3>
                    <p class="empty-revision-desc">
                        Watch video missions or complete mastery quizzes to automatically store study decks here.
                    </p>
                    <button class="btn-red-hero explore-revision-action" id="btn-explore-revision">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                        EXPLORE COURSE MISSIONS
                    </button>
                </div>
            </div>
        `;
    },

    init(container) {
        const btn = container.querySelector('#btn-explore-revision');
        if (btn) {
            btn.addEventListener('click', () => {
                const coursesNav = document.getElementById('nav-courses');
                if (coursesNav) coursesNav.click();
            });
        }
    }
};
