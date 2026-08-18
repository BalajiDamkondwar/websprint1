/**
 * pages/courses.js — Neubrutalist Courses Page
 */
window.AppPages = window.AppPages || {};

window.AppPages['courses'] = {
    render() {
        const categories = [
            'ALL', 'AI / ML', 'FULL STACK', 'SYSTEM DESIGN', 'FRONTEND', 
            'BACKEND', 'DEVOPS', 'CYBERSECURITY', 'SYSTEMS', 'DESIGN'
        ];

        const courses = [
            {
                id: 1,
                earthTag: 'EARTH-1610',
                catTag: 'AI / ML',
                duration: '1:15:20',
                avatar: '3B',
                avatarBg: '#7c3aed',
                title: 'NEURAL NETWORKS & DEEP LEARNING — EARTH-1610 AI...',
                author: '3BLUE1BROWN',
                topics: ['NEURONS & WEIGHTS', 'ACTIVATION FUNCTIONS'],
                extraTopics: '+2',
                views: '14.8M',
                likes: '540K',
                comments: '22.1K',
                bannerGradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)'
            },
            {
                id: 2,
                earthTag: 'EARTH-65',
                catTag: 'FULL STACK',
                duration: '5:10:00',
                avatar: 'JS',
                avatarBg: '#eab308',
                title: 'FULL STACK NEXT.JS 14 & REACT — EARTH-65 WEB-SLINGING...',
                author: 'JAVASCRIPT MASTERY',
                topics: ['NEXT.JS 14 APP ROUTER', 'REACT SERVER COMPONENTS'],
                extraTopics: '+3',
                views: '1.9M',
                likes: '62K',
                comments: '4.3K',
                bannerGradient: 'linear-gradient(135deg, #831843 0%, #9d174d 100%)'
            },
            {
                id: 3,
                earthTag: 'EARTH-2099',
                catTag: 'SYSTEM DESIGN',
                duration: '3:45:00',
                avatar: 'GS',
                avatarBg: '#ff0044',
                title: 'SYSTEM DESIGN & DISTRIBUTED SCALABILITY — NUEVA YORK 20...',
                author: 'GAURAV SEN',
                topics: ['LOAD BALANCERS & PROXIES', 'HORIZONTAL VS VERTICAL SCA...'],
                extraTopics: '+3',
                views: '1.8M',
                likes: '65K',
                comments: '3.4K',
                bannerGradient: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)'
            },
            {
                id: 4,
                earthTag: 'EARTH-8311',
                catTag: 'FRONTEND',
                duration: '11:55:27',
                avatar: 'FC',
                avatarBg: '#0284c7',
                title: 'REACT 18 FULL COURSE — EARTH-8311 REACTIVE UI PROTOCOL',
                author: 'FREECODECAMP.ORG',
                topics: ['JSX & VIRTUAL DOM', 'STATE & PROPS MANAGEMENT'],
                extraTopics: '+3',
                views: '4.2M',
                likes: '120K',
                comments: '8.1K',
                bannerGradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
            }
        ];

        return `
            <div class="courses-page-wrapper">
                <!-- Header Banner -->
                <div class="courses-header-card">
                    <div class="badge-yellow-sm mb-2">MULTIVERSE ACADEMY</div>
                    <div class="courses-title-row">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff0044" stroke-width="2.5" stroke-linecap="round">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                        </svg>
                        <h1 class="courses-hero-title">MULTIVERSE COURSE PORTAL</h1>
                    </div>
                    <p class="courses-hero-subtitle">
                        REAL INTERACTIVE FULL-LENGTH COURSES WITH AI DIAGNOSTICS, NOTES, AND MASTERY CHALLENGES
                    </p>
                </div>

                <!-- Search Bar -->
                <div class="neo-search-container">
                    <div class="neo-search-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                            <circle cx="11" cy="11" r="8"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                        <input type="text" id="neo-course-search" placeholder="SEARCH TOPICS — NEURAL NETS, NEXT.JS, SYSTEM DESIGN, RUST, DOCKER..." aria-label="Search courses">
                    </div>
                </div>

                <!-- Category Filters Row -->
                <div class="neo-category-row">
                    ${categories.map((cat, idx) => `
                        <button class="neo-chip ${idx === 0 ? 'active' : ''}" data-category="${cat}">
                            ${cat}
                        </button>
                    `).join('')}
                </div>

                <!-- Featured Section -->
                <div class="courses-section">
                    <h2 class="courses-section-heading">FEATURED MULTIVERSE MISSIONS</h2>

                    <div class="courses-grid-4" id="courses-cards-container">
                        ${courses.map(c => `
                            <div class="course-neo-card" data-category="${c.catTag}">
                                <div class="course-banner" style="background: ${c.bannerGradient}">
                                    <div class="banner-tags">
                                        <span class="badge-yellow-tag">${c.earthTag}</span>
                                        <span class="badge-yellow-tag">${c.catTag}</span>
                                    </div>
                                    <span class="banner-duration">${c.duration}</span>
                                </div>

                                <div class="course-card-content">
                                    <div class="author-row">
                                        <div class="author-avatar" style="background: ${c.avatarBg}">${c.avatar}</div>
                                        <div class="author-info">
                                            <h3 class="course-title-text">${c.title}</h3>
                                            <span class="author-name">${c.author}</span>
                                        </div>
                                    </div>

                                    <div class="topic-pills-row">
                                        ${c.topics.map(t => `<span class="topic-pill">${t}</span>`).join('')}
                                        <span class="topic-pill extra">${c.extraTopics}</span>
                                    </div>

                                    <div class="metrics-bar">
                                        <span class="metric-item">👁 ${c.views}</span>
                                        <span class="metric-item">👍 ${c.likes}</span>
                                        <span class="metric-item">💬 ${c.comments}</span>
                                    </div>

                                    <button class="btn-launch-mission full-width-btn" data-title="${c.title}" data-earth="${c.earthTag}">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <polygon points="5 3 19 12 5 21 5 3"/>
                                        </svg>
                                        LAUNCH MISSION
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    init(container) {
        const searchInput = container.querySelector('#neo-course-search');
        const chips = container.querySelectorAll('.neo-chip');
        const cards = container.querySelectorAll('.course-neo-card');

        const launchBtns = container.querySelectorAll('.btn-launch-mission');
        launchBtns.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                e.stopPropagation();
                const title = btn.dataset.title || "Neural Networks & Deep Learning – Earth-1610 AI Protocol";
                const earthTag = btn.dataset.earth || "EARTH-1610";
                window.openMission({
                    title: title,
                    earthTag: earthTag,
                    topics: [
                        "01. DIMENSIONAL BRIEFING & CORE ARCHITECTURE",
                        "02. FUNDAMENTAL PATTERNS & QUANTUM SETUP",
                        "03. HANDS-ON MISSION: PRACTICAL IMPLEMENTATION",
                        "04. ADVANCED MULTIVERSE SCALING & OPTIMIZATIONS",
                        "05. MISSION DEBRIEF & REAL-WORLD INTEGRATION"
                    ]
                });
            });
        });

        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                chips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                filter();
            });
        });

        if (searchInput) {
            searchInput.addEventListener('input', filter);
        }

        function filter() {
            const activeChip = container.querySelector('.neo-chip.active');
            const category = activeChip ? activeChip.dataset.category : 'ALL';
            const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

            cards.forEach(card => {
                const cardCat = card.dataset.category;
                const text = card.textContent.toLowerCase();

                const catMatch = category === 'ALL' || cardCat === category;
                const queryMatch = !query || text.includes(query);

                card.style.display = (catMatch && queryMatch) ? 'flex' : 'none';
            });
        }
    }
};
