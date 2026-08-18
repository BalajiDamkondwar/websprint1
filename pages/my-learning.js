/**
 * pages/my-learning.js — Neubrutalist My Learning Page
 */
window.AppPages = window.AppPages || {};

window.AppPages['my-learning'] = {
    render() {
        return `
            <div class="my-learning-page-wrapper">
                <!-- Header Banner -->
                <div class="learning-header-card">
                    <div class="badge-yellow-sm mb-2">LEARNING WALL</div>
                    <h1 class="learning-hero-title">YOUR MULTIVERSE HISTORY</h1>
                    <div class="title-divider-line"></div>
                </div>

                <!-- Section Label -->
                <div class="learning-section-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff0044" stroke-width="2.5" stroke-linecap="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    </svg>
                    <h2 class="learning-section-title">ENROLLED & COMPLETED MISSIONS (0)</h2>
                </div>

                <!-- Main Layout Grid -->
                <div class="my-learning-main-grid">
                    <!-- Left Large Container -->
                    <div class="neo-card enrolled-empty-card">
                        <div class="empty-book-icon-wrap">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                            </svg>
                        </div>
                        <p class="empty-missions-text">YOU HAVEN'T ENROLLED IN ANY COURSE MISSIONS YET.</p>
                        <button class="btn-red-hero explore-courses-action" id="btn-explore-courses">
                            EXPLORE MULTIVERSE COURSES
                        </button>
                    </div>

                    <!-- Right Sidebar Column -->
                    <div class="learning-right-column">
                        <!-- Telemetry Overview Card -->
                        <div class="neo-card telemetry-card">
                            <div class="side-header-row">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#eab308" stroke-width="2.5">
                                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                                    <path d="M4 22h16"/>
                                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
                                </svg>
                                <h3>TELEMETRY OVERVIEW</h3>
                            </div>

                            <div class="telemetry-grid-2">
                                <div class="telemetry-box">
                                    <span class="tele-num cyan-num">0</span>
                                    <span class="tele-label">MISSIONS</span>
                                </div>
                                <div class="telemetry-box">
                                    <span class="tele-num red-num">0</span>
                                    <span class="tele-label">QUIZZES</span>
                                </div>
                            </div>

                            <div class="telemetry-box-wide">
                                <span class="tele-num yellow-num">88%</span>
                                <span class="tele-label">AVERAGE MASTERY SCORE</span>
                            </div>
                        </div>

                        <!-- Recent Activity Card -->
                        <div class="neo-card recent-act-card">
                            <div class="side-header-row">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2.5">
                                    <polyline points="1 4 1 10 7 10"/>
                                    <path d="M3.51 15a9 9 0 1 0 .49-3.65"/>
                                </svg>
                                <h3>RECENT ACTIVITY</h3>
                            </div>

                            <div class="recent-act-body">
                                <span class="no-act-text">No recent activity recorded.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    init(container) {
        const btn = container.querySelector('#btn-explore-courses');
        if (btn) {
            btn.addEventListener('click', () => {
                const coursesNav = document.getElementById('nav-courses');
                if (coursesNav) coursesNav.click();
            });
        }
    }
};
