/**
 * pages/dashboard.js — Neubrutalist Multiverse Dashboard
 */
window.AppPages = window.AppPages || {};

window.AppPages['dashboard'] = {
    render() {
        return `
            <div class="dashboard-page-wrapper">
                <!-- Top Row: Hero Banner (Left) & Revision Queue (Right) -->
                <div class="dashboard-top-grid">
                    <!-- Hero Banner -->
                    <div class="dashboard-hero-card">
                        <div class="hero-badge">
                            <span class="badge-star">★</span> MULTIVERSE LEARNING HQ <span class="badge-star">★</span>
                        </div>
                        <h1 class="hero-title">
                            READY TO START YOUR<br>FIRST COURSE TODAY?
                        </h1>
                        <p class="hero-subtitle">
                            Your cognitive patterns look great. Keep up the multiverse momentum!
                        </p>
                        <button class="btn-cyan-hero" id="hero-start-btn">
                            START FIRST COURSE
                        </button>
                    </div>

                    <!-- Revision Queue -->
                    <div class="neo-card revision-queue-card">
                        <div class="card-header-row">
                            <svg class="header-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <polyline points="1 4 1 10 7 10"/>
                                <path d="M3.51 15a9 9 0 1 0 .49-3.65"/>
                            </svg>
                            <h3 class="card-header-title">REVISION QUEUE</h3>
                        </div>
                        <div class="queue-body">
                            <div class="queue-check-circle">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                            </div>
                            <span class="queue-status-text">QUEUE CLEAR!</span>
                        </div>
                        <button class="btn-neo-outline full-width-btn" id="view-learning-wall-btn">
                            VIEW LEARNING WALL &gt;
                        </button>
                    </div>
                </div>

                <!-- Middle Row: Learning Velocity, Your Progress, Current Goal -->
                <div class="dashboard-mid-grid">
                    <!-- 1. Learning Velocity -->
                    <div class="neo-card learning-velocity-card">
                        <div class="section-title-tag">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <line x1="18" y1="20" x2="18" y2="10"/>
                                <line x1="12" y1="20" x2="12" y2="4"/>
                                <line x1="6"  y1="20" x2="6"  y2="14"/>
                            </svg>
                            <span>LEARNING VELOCITY</span>
                        </div>

                        <div class="velocity-card-inner">
                            <div class="velocity-header">
                                <span class="velocity-subtitle">⚡ WEEKLY NEURAL OUTPUT</span>
                                <span class="badge-yellow-sm">+28% VELOCITY</span>
                            </div>

                            <!-- Bar Chart -->
                            <div class="bar-chart-container">
                                <div class="chart-bars">
                                    <div class="bar-item">
                                        <div class="bar cyan" style="height: 35%;"></div>
                                        <span class="bar-label">S</span>
                                    </div>
                                    <div class="bar-item">
                                        <div class="bar cyan" style="height: 60%;"></div>
                                        <span class="bar-label">M</span>
                                    </div>
                                    <div class="bar-item">
                                        <div class="bar cyan" style="height: 40%;"></div>
                                        <span class="bar-label">T</span>
                                    </div>
                                    <div class="bar-item">
                                        <div class="bar magenta" style="height: 90%;"></div>
                                        <span class="bar-label">W</span>
                                    </div>
                                    <div class="bar-item">
                                        <div class="bar cyan" style="height: 65%;"></div>
                                        <span class="bar-label">T</span>
                                    </div>
                                    <div class="bar-item">
                                        <div class="bar cyan" style="height: 30%;"></div>
                                        <span class="bar-label">F</span>
                                    </div>
                                    <div class="bar-item">
                                        <div class="bar magenta" style="height: 80%;"></div>
                                        <span class="bar-label">S</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 2. Your Progress -->
                    <div class="neo-card your-progress-card">
                        <div class="section-title-tag">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <circle cx="12" cy="12" r="10"/>
                                <circle cx="12" cy="12" r="6"/>
                                <circle cx="12" cy="12" r="2"/>
                            </svg>
                            <span>YOUR PROGRESS</span>
                        </div>

                        <div class="progress-card-inner">
                            <div class="stat-row-item">
                                <div class="stat-icon-box red-box">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2">
                                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                                        <path d="M4 22h16"/>
                                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
                                    </svg>
                                </div>
                                <div class="stat-info">
                                    <span class="stat-num">0</span>
                                    <span class="stat-desc">COMPLETED</span>
                                </div>
                            </div>

                            <div class="stat-row-item">
                                <div class="stat-icon-box yellow-box">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                                    </svg>
                                </div>
                                <div class="stat-info">
                                    <span class="stat-num">0</span>
                                    <span class="stat-desc">BADGES</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 3. Current Goal -->
                    <div class="neo-card current-goal-card">
                        <div class="section-title-tag">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.26-1.5 1.5-2.5"/>
                                <path d="M12 15l-3-3"/>
                                <path d="M15 12l-3-3"/>
                                <path d="M15 3a9 9 0 0 1 6 6c0 5-5 9-9 9a9 9 0 0 1-6-6c0-4 4-9 9-9z"/>
                            </svg>
                            <span>CURRENT GOAL</span>
                        </div>

                        <div class="goal-card-inner">
                            <div class="badge-yellow-sm">MASTERY GOAL</div>
                            <h3 class="goal-title">PICK A COURSE</h3>

                            <div class="goal-progress-bar-wrap">
                                <div class="progress-labels">
                                    <span>PROGRESS</span>
                                    <span>0%</span>
                                </div>
                                <div class="progress-track">
                                    <div class="progress-fill" style="width: 0%;"></div>
                                </div>
                            </div>

                            <button class="btn-red-hero full-width-btn" id="goal-browse-btn">
                                BROWSE ALL
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Bottom Section: Multiverse Recommendations -->
                <div class="dashboard-recommendations-section">
                    <div class="rec-section-header">
                        <div class="rec-title-wrap">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#eab308" stroke-width="2.5">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                            </svg>
                            <h2>MULTIVERSE RECOMMENDATIONS</h2>
                        </div>
                        <a href="#" class="explore-all-link" id="rec-explore-all">EXPLORE ALL &gt;</a>
                    </div>

                    <div class="recommendations-grid">
                        <div class="rec-card">
                            <div class="rec-tags">
                                <span class="badge-yellow-tag">EARTH-1610</span>
                                <span class="badge-yellow-tag">AI / ML</span>
                            </div>
                            <h3 class="rec-card-title">Spider-Sense Neural Networks</h3>
                            <p class="rec-card-desc">Build real-time predictive hazard detection using deep vision models.</p>
                            <div class="rec-card-footer">
                                <span class="rec-duration">⏱ 14 hrs</span>
                                <button class="btn-neo-sm">START &gt;</button>
                            </div>
                        </div>

                        <div class="rec-card">
                            <div class="rec-tags">
                                <span class="badge-yellow-tag">EARTH-65</span>
                                <span class="badge-yellow-tag">FULL STACK</span>
                            </div>
                            <h3 class="rec-card-title">Web-Slinger Realtime Mesh</h3>
                            <p class="rec-card-desc">Architect low-latency WebSockets & distributed state synchronization.</p>
                            <div class="rec-card-footer">
                                <span class="rec-duration">⏱ 18 hrs</span>
                                <button class="btn-neo-sm">START &gt;</button>
                            </div>
                        </div>

                        <div class="rec-card">
                            <div class="rec-tags">
                                <span class="badge-yellow-tag">EARTH-2099</span>
                                <span class="badge-yellow-tag">SYSTEM DESIGN</span>
                            </div>
                            <h3 class="rec-card-title">Nueva York Quantum Protocols</h3>
                            <p class="rec-card-desc">Design high-throughput resilient cloud infrastructure & microservices.</p>
                            <div class="rec-card-footer">
                                <span class="rec-duration">⏱ 22 hrs</span>
                                <button class="btn-neo-sm">START &gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    init(container) {
        const startBtn = container.querySelector('#hero-start-btn');
        const browseBtn = container.querySelector('#goal-browse-btn');
        const exploreAll = container.querySelector('#rec-explore-all');

        const goToCourses = () => {
            const coursesNav = document.getElementById('nav-courses');
            if (coursesNav) coursesNav.click();
        };

        if (startBtn) startBtn.addEventListener('click', goToCourses);
        if (browseBtn) browseBtn.addEventListener('click', goToCourses);
        if (exploreAll) exploreAll.addEventListener('click', (e) => { e.preventDefault(); goToCourses(); });
    }
};
