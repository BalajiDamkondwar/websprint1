/**
 * pages/interview.js — Neubrutalist Multiverse AI Interview Prep
 */
window.AppPages = window.AppPages || {};

window.AppPages['interview'] = {
    render() {
        return `
            <div class="interview-page-wrapper">
                <!-- Header Banner Card -->
                <div class="interview-header-card">
                    <div class="interview-header-left">
                        <div class="badge-yellow-sm mb-2">AI SIMULATION</div>
                        <div class="interview-title-row">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff0044" stroke-width="2.5" stroke-linecap="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            <h1 class="interview-hero-title">MULTIVERSE INTERVIEW PREP</h1>
                        </div>
                    </div>
                    <button class="btn-neo-outline new-session-btn" id="btn-new-session">
                        🔄 NEW SESSION
                    </button>
                </div>

                <div class="title-divider-line"></div>

                <!-- Main Interactive Chat Card -->
                <div class="neo-card interview-chat-container">
                    <div class="chat-messages-area" id="chat-messages">
                        <!-- Bot Message 1 -->
                        <div class="chat-message-row bot-row">
                            <div class="bot-avatar-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5">
                                    <rect x="3" y="11" width="18" height="10" rx="2"/>
                                    <circle cx="12" cy="5" r="2"/>
                                    <path d="M12 7v4"/>
                                    <line x1="8" y1="16" x2="8" y2="16"/>
                                    <line x1="16" y1="16" x2="16" y2="16"/>
                                </svg>
                            </div>
                            <div class="chat-bubble-box">
                                <p class="bubble-text">
                                    Welcome to your Multiverse AI Mock Interview! I've analyzed your progress in 0 courses. Let's test your depth!
                                </p>
                            </div>
                        </div>

                        <!-- Bot Message 2 (Question with Yellow Tag Header) -->
                        <div class="chat-message-row bot-row">
                            <div class="bot-avatar-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5">
                                    <rect x="3" y="11" width="18" height="10" rx="2"/>
                                    <circle cx="12" cy="5" r="2"/>
                                    <path d="M12 7v4"/>
                                    <line x1="8" y1="16" x2="8" y2="16"/>
                                    <line x1="16" y1="16" x2="16" y2="16"/>
                                </svg>
                            </div>
                            <div class="chat-bubble-wrapper">
                                <div class="chat-tag-header">CONCEPTUAL • INTERMEDIATE</div>
                                <div class="chat-bubble-box tagged-box">
                                    <p class="bubble-text">
                                        Could you explain the difference between 'state' and 'props' in a React application? When would you choose one over the other for data management?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Chat Input Bar -->
                    <div class="chat-input-bar">
                        <input type="text" id="chat-user-input" placeholder="TYPE YOUR ANSWER..." aria-label="Type your answer">
                        <button class="chat-send-btn" id="chat-send-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    init(container) {
        const input = container.querySelector('#chat-user-input');
        const sendBtn = container.querySelector('#chat-send-btn');
        const messagesArea = container.querySelector('#chat-messages');

        const sendMessage = () => {
            const val = input.value.trim();
            if (!val) return;

            // Append user bubble
            const userRow = document.createElement('div');
            userRow.className = 'chat-message-row user-row';
            userRow.innerHTML = `
                <div class="chat-bubble-box user-box">
                    <p class="bubble-text">${escapeHtml(val)}</p>
                </div>
            `;
            messagesArea.appendChild(userRow);
            input.value = '';
            messagesArea.scrollTop = messagesArea.scrollHeight;

            // Simulate AI bot feedback reply
            setTimeout(() => {
                const botRow = document.createElement('div');
                botRow.className = 'chat-message-row bot-row';
                botRow.innerHTML = `
                    <div class="bot-avatar-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5">
                            <rect x="3" y="11" width="18" height="10" rx="2"/>
                            <circle cx="12" cy="5" r="2"/>
                            <path d="M12 7v4"/>
                        </svg>
                    </div>
                    <div class="chat-bubble-box">
                        <p class="bubble-text">
                            Great explanation! 'State' is managed internally within a component and can change over time, whereas 'props' are read-only parameters passed down from a parent component. Excellent conceptual mastery!
                        </p>
                    </div>
                `;
                messagesArea.appendChild(botRow);
                messagesArea.scrollTop = messagesArea.scrollHeight;
            }, 800);
        };

        if (sendBtn) sendBtn.addEventListener('click', sendMessage);
        if (input) {
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') sendMessage();
            });
        }

        function escapeHtml(text) {
            return text.replace(/[&<>"']/g, function(m) {
                return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
            });
        }
    }
};
