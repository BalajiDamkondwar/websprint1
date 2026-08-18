/**
 * pages/mission.js — Neubrutalist Mission Pre-Learning Assessment & Interactive Mission Flow
 */
window.AppPages = window.AppPages || {};

window.currentMissionData = {
    title: "Neural Networks & Deep Learning – Earth-1610 AI Protocol",
    earthTag: "EARTH-1610",
    topics: [
        "01. DIMENSIONAL BRIEFING & CORE ARCHITECTURE",
        "02. FUNDAMENTAL PATTERNS & QUANTUM SETUP",
        "03. HANDS-ON MISSION: PRACTICAL IMPLEMENTATION",
        "04. ADVANCED MULTIVERSE SCALING & OPTIMIZATIONS",
        "05. MISSION DEBRIEF & REAL-WORLD INTEGRATION"
    ]
};

window.AppPages['mission'] = {
    render(data) {
        const mission = data || window.currentMissionData;
        const topics = mission.topics || window.currentMissionData.topics;

        return `
            <div class="mission-page-wrapper">

                <!-- 1. Top Pre-Learning Assessment Card -->
                <div class="pre-assessment-card">
                    <div class="assessment-badge-row">
                        <span class="badge-yellow-assessment">PRE-LEARNING ASSESSMENT</span>
                    </div>

                    <h1 class="assessment-hero-title">
                        WHICH CONCEPTS ARE YOU ALREADY FAMILIAR WITH?
                    </h1>

                    <p class="assessment-description">
                        Select the topics you've studied before. We'll quiz you on them to personalize your learning path. You can also skip to watch the video directly.
                    </p>

                    <div class="assessment-protocol-row">
                        <span class="sparkle-icon">✨</span>
                        <a href="#" class="protocol-link" id="mission-protocol-title">${mission.title}</a>
                    </div>
                </div>

                <!-- 2. Topics List Card -->
                <div class="topics-container-card">
                    <div class="topics-card-header">
                        TOPICS IN THIS VIDEO (${topics.length} FOUND)
                    </div>

                    <div class="topics-buttons-grid" id="topics-buttons-list">
                        ${topics.map((t, idx) => `
                            <button class="topic-select-btn" data-index="${idx}" data-topic="${t}">
                                <span class="topic-text">${t}</span>
                                <span class="topic-check-icon hidden">✓</span>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- 3. Action Buttons Row -->
                <div class="mission-actions-row">
                    <button class="btn-skip-quiz" id="btn-skip-quiz">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="5 4 15 12 5 20 5 4"/>
                            <line x1="19" y1="5" x2="19" y2="19"/>
                        </svg>
                        SKIP QUIZ, WATCH VIDEO
                    </button>

                    <button class="btn-start-diagnostic" id="btn-start-diagnostic">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                        </svg>
                        <span id="diagnostic-btn-text">SELECT A TOPIC TO START</span>
                    </button>
                </div>

                <!-- Diagnostic Quiz Modal -->
                <div class="mission-modal-overlay hidden" id="quiz-modal-overlay">
                    <div class="neo-card quiz-modal-content">
                        <div class="modal-header-row">
                            <div class="badge-yellow-sm">DIAGNOSTIC QUIZ</div>
                            <button class="modal-close-btn" id="close-quiz-modal">&times;</button>
                        </div>
                        <h2 class="quiz-modal-title" id="quiz-question-title">QUESTION 1 OF 3</h2>
                        <p class="quiz-modal-prompt" id="quiz-question-text">
                            What is the primary function of activation functions in Neural Network Core Architectures?
                        </p>
                        <div class="quiz-options-list" id="quiz-options-container">
                            <button class="quiz-opt-btn" data-correct="true">A. To introduce non-linearity allowing networks to learn complex patterns</button>
                            <button class="quiz-opt-btn" data-correct="false">B. To multiply weights by a constant scaling factor</button>
                            <button class="quiz-opt-btn" data-correct="false">C. To convert all floating point numbers to integers</button>
                            <button class="quiz-opt-btn" data-correct="false">D. To store trained checkpoint data on disk</button>
                        </div>
                        <div class="quiz-feedback-box hidden" id="quiz-feedback-box"></div>
                    </div>
                </div>

                <!-- Video Player Modal -->
                <div class="mission-modal-overlay hidden" id="video-modal-overlay">
                    <div class="neo-card video-modal-content">
                        <div class="modal-header-row">
                            <div class="badge-yellow-sm">MISSION PLAYER</div>
                            <button class="modal-close-btn" id="close-video-modal">&times;</button>
                        </div>
                        <h2 class="video-modal-title">${mission.title}</h2>
                        <div class="simulated-video-screen">
                            <div class="play-center-btn">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="#00f0ff" stroke="#000" stroke-width="2">
                                    <polygon points="5 3 19 12 5 21 5 3"/>
                                </svg>
                            </div>
                            <span class="video-duration-badge">1:15:20 • HD 1080P</span>
                        </div>
                        <div class="video-notes-row">
                            <p>🎯 <strong>Personalized Route:</strong> Skipping pre-learning quiz. Starting full video protocol for Earth-1610 AI Protocol.</p>
                            <button class="btn-cyan-hero" id="complete-mission-btn" style="margin-top: 12px; width: 100%;">
                                ✓ COMPLETE MISSION & CLAIM XP
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        `;
    },

    init(container) {
        const topicBtns = container.querySelectorAll('.topic-select-btn');
        const startDiagBtn = container.querySelector('#btn-start-diagnostic');
        const diagBtnText = container.querySelector('#diagnostic-btn-text');
        const skipQuizBtn = container.querySelector('#btn-skip-quiz');

        const quizModal = container.querySelector('#quiz-modal-overlay');
        const closeQuizBtn = container.querySelector('#close-quiz-modal');
        const videoModal = container.querySelector('#video-modal-overlay');
        const closeVideoBtn = container.querySelector('#close-video-modal');

        let selectedTopics = new Set();

        topicBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = btn.dataset.index;
                const check = btn.querySelector('.topic-check-icon');

                if (selectedTopics.has(idx)) {
                    selectedTopics.delete(idx);
                    btn.classList.remove('selected');
                    if (check) check.classList.add('hidden');
                } else {
                    selectedTopics.add(idx);
                    btn.classList.add('selected');
                    if (check) check.classList.remove('hidden');
                }

                if (selectedTopics.size > 0) {
                    startDiagBtn.classList.add('active-ready');
                    diagBtnText.textContent = `START DIAGNOSTIC QUIZ (${selectedTopics.size} TOPIC${selectedTopics.size > 1 ? 'S' : ''})`;
                } else {
                    startDiagBtn.classList.remove('active-ready');
                    diagBtnText.textContent = 'SELECT A TOPIC TO START';
                }
            });
        });

        if (skipQuizBtn) {
            skipQuizBtn.addEventListener('click', () => {
                if (videoModal) videoModal.classList.remove('hidden');
            });
        }

        if (startDiagBtn) {
            startDiagBtn.addEventListener('click', () => {
                if (quizModal) quizModal.classList.remove('hidden');
            });
        }

        if (closeQuizBtn) {
            closeQuizBtn.addEventListener('click', () => {
                if (quizModal) quizModal.classList.add('hidden');
            });
        }

        if (closeVideoBtn) {
            closeVideoBtn.addEventListener('click', () => {
                if (videoModal) videoModal.classList.add('hidden');
            });
        }

        // Quiz option selection logic
        const quizOpts = container.querySelectorAll('.quiz-opt-btn');
        const quizFeedback = container.querySelector('#quiz-feedback-box');

        quizOpts.forEach(opt => {
            opt.addEventListener('click', () => {
                const isCorrect = opt.dataset.correct === 'true';
                quizOpts.forEach(o => o.classList.remove('selected-correct', 'selected-wrong'));

                if (isCorrect) {
                    opt.classList.add('selected-correct');
                    if (quizFeedback) {
                        quizFeedback.className = 'quiz-feedback-box success-feedback';
                        quizFeedback.innerHTML = '🎉 CORRECT! Your neural baseline score has been updated. Skipping redundant topic modules!';
                    }
                } else {
                    opt.classList.add('selected-wrong');
                    if (quizFeedback) {
                        quizFeedback.className = 'quiz-feedback-box fail-feedback';
                        quizFeedback.innerHTML = '⚠️ INCORRECT! We recommend completing Topic 01 before advancing to deep neural scaling.';
                    }
                }
            });
        });

        const completeMissionBtn = container.querySelector('#complete-mission-btn');
        if (completeMissionBtn) {
            completeMissionBtn.addEventListener('click', () => {
                alert('⚡ Mission Completed! +150 XP added to your AdaptLearn profile.');
                if (videoModal) videoModal.classList.add('hidden');
            });
        }
    }
};
