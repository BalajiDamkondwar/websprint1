/**
 * pages/projects.js — Neubrutalist Adaptive Portfolio Missions
 */
window.AppPages = window.AppPages || {};

window.AppPages['projects'] = {
    render() {
        const projects = [
            {
                id: 1,
                title: 'MODERN PORTFOLIO BUILDER',
                useCase: 'A sleek, customizable portfolio for developers to showcase their work with dark mode support.',
                systemFlow: 'User edits profile data -> UI updates live -> Sections for experience, skills, and projects -> Optimized for SEO.',
                stack: ['REACT', 'FRAMER MOTION', 'TAILWIND CSS', 'LUCIDE REACT']
            },
            {
                id: 2,
                title: 'RESTFUL TASK API',
                useCase: 'A clean and efficient API for managing tasks and reminders.',
                systemFlow: 'Endpoint handles CRUD -> Data validated with middleware -> Stored in local DB -> Error handling included.',
                stack: ['NODE.JS', 'EXPRESS', 'JWT', 'FIREBASE']
            },
            {
                id: 3,
                title: 'SIMPLE SENTIMENT ANALYZER',
                useCase: 'Categorizes text input as positive, negative, or neutral for customer reviews.',
                systemFlow: 'Text submission -> Pre-processing -> Model inference -> Results visualized with confidence scores.',
                stack: ['PYTHON', 'NLTK', 'FLASK', 'REACT']
            }
        ];

        return `
            <div class="projects-page-wrapper">
                <!-- Header Banner Card -->
                <div class="projects-header-card neo-card">
                    <div class="projects-header-top">
                        <div class="badge-yellow-sm">MULTIVERSE LABS</div>
                        <div class="badge-yellow-sm right-badge">⚙ BEGINNER LEVEL</div>
                    </div>
                    <div class="projects-title-row">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2.5" stroke-linecap="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                            <line x1="8" y1="21" x2="16" y2="21"/>
                            <line x1="12" y1="17" x2="12" y2="21"/>
                        </svg>
                        <h1 class="projects-hero-title">ADAPTIVE PORTFOLIO MISSIONS</h1>
                    </div>
                    <p class="projects-hero-subtitle">
                        GENERATING BEGINNER PROJECTS BASED ON YOUR LEARNING PATTERNS
                    </p>
                </div>

                <!-- Projects Cards Grid (3 Columns) -->
                <div class="projects-grid-3">
                    ${projects.map(p => `
                        <div class="neo-card project-card">
                            <div class="project-card-top">
                                <div class="project-red-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round">
                                        <rect x="9" y="3" width="6" height="6" rx="1"/>
                                        <rect x="3" y="15" width="6" height="6" rx="1"/>
                                        <rect x="15" y="15" width="6" height="6" rx="1"/>
                                        <path d="M12 9v3M6 15v-3h12v3"/>
                                    </svg>
                                </div>
                                <span class="badge-yellow-sm">BEGINNER</span>
                            </div>

                            <h3 class="project-title">${p.title}</h3>

                            <div class="project-section">
                                <span class="section-label">USE CASE</span>
                                <p class="project-desc">${p.useCase}</p>
                            </div>

                            <div class="system-flow-box">
                                <span class="flow-label">🔗 SYSTEM FLOW</span>
                                <p class="flow-text">${p.systemFlow}</p>
                            </div>

                            <div class="project-section">
                                <span class="section-label">TECH STACK</span>
                                <div class="tech-stack-row">
                                    ${p.stack.map(s => `<span class="tech-pill">${s}</span>`).join('')}
                                </div>
                            </div>

                            <button class="btn-red-hero start-project-btn full-width-btn">
                                ⚡ START MISSION
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    init(container) {
        const startBtns = container.querySelectorAll('.start-project-btn');
        startBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const coursesNav = document.getElementById('nav-courses');
                if (coursesNav) coursesNav.click();
            });
        });
    }
};
