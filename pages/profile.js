/**
 * pages/profile.js — Neubrutalist Multiverse Agent Profile
 */
window.AppPages = window.AppPages || {};

window.AppPages['profile'] = {
    render() {
        // Generate Heatmap Blocks (52 weeks x 7 days = 364 blocks)
        const heatmapBlocks = Array.from({ length: 140 }).map((_, i) => {
            const level = i % 7 === 0 ? 2 : (i % 11 === 0 ? 3 : 0);
            return `<div class="heatmap-sq level-${level}"></div>`;
        }).join('');

        return `
            <div class="profile-page-wrapper">
                <!-- Header Banner Card -->
                <div class="profile-header-card neo-card">
                    <div class="profile-header-top">
                        <div class="badge-yellow-sm">HERO DOSSIER • SECURE ARCHIVE</div>
                        <div class="badge-yellow-sm right-badge">* EARTH-1610 HQ *</div>
                    </div>
                    <div class="profile-title-row">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff0044" stroke-width="2.5" stroke-linecap="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                        <h1 class="profile-hero-title">MULTIVERSE AGENT PROFILE</h1>
                    </div>
                    <p class="profile-hero-subtitle">
                        MANAGE ACCOUNT PARAMETERS, ACTIVE DIMENSION CREDENTIALS, AND ADAPTIVE TELEMETRY
                    </p>
                </div>

                <!-- Main Layout Grid (Left Hero Card + Right Info Cards) -->
                <div class="profile-main-grid">
                    <!-- Left Hero Profile Card -->
                    <div class="neo-card hero-dossier-card">
                        <div class="clearance-tag-wrap">
                            <span class="badge-yellow-sm">CLEARANCE V</span>
                        </div>

                        <div class="dossier-avatar-box">
                            <span class="dossier-avatar-letter">B</span>
                        </div>

                        <h2 class="dossier-hero-name">BALAJI.DAMKONDWAR25</h2>
                        <span class="dossier-hero-email">balaji.damkondwar25@pccoepune.org</span>

                        <div class="active-hero-badge">
                            <span class="badge-yellow-sm">* ACTIVE MULTIVERSE HERO *</span>
                        </div>

                        <a href="index.html" class="btn-neo-outline signout-hq-btn">
                            ➔ SIGN OUT OF HQ
                        </a>
                    </div>

                    <!-- Right Column: Stats Grid & Telemetry Specs -->
                    <div class="profile-right-column">
                        <!-- Top Stats 4 Grid -->
                        <div class="profile-stats-grid-4">
                            <div class="neo-card profile-stat-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2.5">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                                </svg>
                                <span class="pstat-val">0</span>
                                <span class="pstat-lbl">COURSES ENROLLED</span>
                            </div>

                            <div class="neo-card profile-stat-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff0044" stroke-width="2.5">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <polyline points="22 4 12 14.01 9 11.01"/>
                                </svg>
                                <span class="pstat-val">0</span>
                                <span class="pstat-lbl">COMPLETED</span>
                            </div>

                            <div class="neo-card profile-stat-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffe600" stroke-width="2.5">
                                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"/>
                                </svg>
                                <span class="pstat-val">12d</span>
                                <span class="pstat-lbl">DAILY STREAK</span>
                            </div>

                            <div class="neo-card profile-stat-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff0044" stroke-width="2.5">
                                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                                    <path d="M4 22h16"/>
                                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
                                </svg>
                                <span class="pstat-val">4</span>
                                <span class="pstat-lbl">BADGES EARNED</span>
                            </div>
                        </div>

                        <!-- Telemetry Specifications Card -->
                        <div class="neo-card telemetry-specs-card">
                            <div class="specs-header">
                                <span class="specs-title">HERO TELEMETRY SPECIFICATIONS</span>
                                <span class="badge-yellow-sm">ENCRYPTED</span>
                            </div>

                            <div class="specs-fields-grid">
                                <div class="spec-field-item">
                                    <span class="field-label">HERO CODENAME</span>
                                    <div class="field-value-box">
                                        <span>👤 balaji.damkondwar25</span>
                                    </div>
                                </div>
                                <div class="spec-field-item">
                                    <span class="field-label">MULTIVERSE NETWORK EMAIL</span>
                                    <div class="field-value-box">
                                        <span>✉ balaji.damkondwar25@pccoepune.org</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Heatmap Section -->
                            <div class="heatmap-section">
                                <div class="heatmap-header">
                                    <span class="heatmap-title">📅 Learning Activity</span>
                                    <div class="heatmap-meta-pills">
                                        <span class="meta-pill">0 Active Days</span>
                                        <span class="meta-pill">0 This Week</span>
                                        <span class="meta-pill">0d Best Streak</span>
                                    </div>
                                </div>
                                <span class="heatmap-sub">One year of daily visits</span>

                                <div class="heatmap-grid-scroll">
                                    <div class="heatmap-months-labels">
                                        <span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
                                    </div>
                                    <div class="heatmap-grid-flex">
                                        ${heatmapBlocks}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
