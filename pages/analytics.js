/**
 * pages/analytics.js — Neubrutalist Multiverse Cognitive Telemetry
 */
window.AppPages = window.AppPages || {};

window.AppPages['analytics'] = {
    render() {
        return `
            <div class="analytics-page-wrapper">
                <!-- Header Banner Card -->
                <div class="analytics-header-card neo-card">
                    <div class="badge-yellow-sm mb-2">TELEMETRY & SPECS</div>
                    <div class="analytics-title-row">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff0044" stroke-width="2.5" stroke-linecap="round">
                            <line x1="18" y1="20" x2="18" y2="10"/>
                            <line x1="12" y1="20" x2="12" y2="4"/>
                            <line x1="6"  y1="20" x2="6"  y2="14"/>
                        </svg>
                        <h1 class="analytics-hero-title">MULTIVERSE COGNITIVE TELEMETRY</h1>
                    </div>
                    <p class="analytics-hero-subtitle">
                        DETAILED INSIGHTS INTO YOUR ADAPTIVE LEARNING VELOCITY
                    </p>
                </div>

                <div class="title-divider-line"></div>

                <!-- Top Metrics Row (4 Cards) -->
                <div class="analytics-metrics-grid-4">
                    <!-- Metric Card 1 -->
                    <div class="neo-card telemetry-metric-card">
                        <div class="telemetry-card-top">
                            <div class="telemetry-icon-box cyan-box">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14"/>
                                </svg>
                            </div>
                            <span class="badge-yellow-sm">+12%</span>
                        </div>
                        <span class="telemetry-val">2.7h</span>
                        <span class="telemetry-lbl">AVG. DAILY TIME</span>
                    </div>

                    <!-- Metric Card 2 -->
                    <div class="neo-card telemetry-metric-card">
                        <div class="telemetry-card-top">
                            <div class="telemetry-icon-box red-box">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5">
                                    <circle cx="12" cy="12" r="10"/>
                                    <circle cx="12" cy="12" r="6"/>
                                    <circle cx="12" cy="12" r="2"/>
                                </svg>
                            </div>
                            <span class="badge-yellow-sm">+5%</span>
                        </div>
                        <span class="telemetry-val">88%</span>
                        <span class="telemetry-lbl">QUIZ ACCURACY</span>
                    </div>

                    <!-- Metric Card 3 -->
                    <div class="neo-card telemetry-metric-card">
                        <div class="telemetry-card-top">
                            <div class="telemetry-icon-box yellow-box">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5">
                                    <path d="M12 2a6 6 0 0 0-6 6c0 2.5 1.5 4.5 3 6v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2c1.5-1.5 3-3.5 3-6a6 6 0 0 0-6-6z"/>
                                    <line x1="9" y1="21" x2="15" y2="21"/>
                                </svg>
                            </div>
                            <span class="badge-yellow-sm">+8</span>
                        </div>
                        <span class="telemetry-val">47</span>
                        <span class="telemetry-lbl">CONCEPTS MASTERED</span>
                    </div>

                    <!-- Metric Card 4 -->
                    <div class="neo-card telemetry-metric-card">
                        <div class="telemetry-card-top">
                            <div class="telemetry-icon-box magenta-box">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5">
                                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                                    <polyline points="17 6 23 6 23 12"/>
                                </svg>
                            </div>
                            <span class="badge-yellow-sm">+3%</span>
                        </div>
                        <span class="telemetry-val">92%</span>
                        <span class="telemetry-lbl">WEEKLY PROGRESS</span>
                    </div>
                </div>

                <!-- Charts Section (2 Columns) -->
                <div class="analytics-charts-grid-2">
                    <!-- Chart 1: Learning Time -->
                    <div class="neo-card chart-card">
                        <div class="chart-card-header">
                            <div class="chart-title-wrap">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2.5">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14"/>
                                </svg>
                                <span class="chart-title">LEARNING TIME</span>
                            </div>
                            <span class="badge-yellow-sm">THIS WEEK</span>
                        </div>

                        <!-- Bar Chart SVG Visual -->
                        <div class="chart-svg-wrapper">
                            <svg viewBox="0 0 400 200" class="chart-svg">
                                <!-- Y Axis Lines -->
                                <line x1="40" y1="30" x2="380" y2="30" stroke="#e5e7eb" stroke-dasharray="4"/>
                                <line x1="40" y1="70" x2="380" y2="70" stroke="#e5e7eb" stroke-dasharray="4"/>
                                <line x1="40" y1="110" x2="380" y2="110" stroke="#e5e7eb" stroke-dasharray="4"/>
                                <line x1="40" y1="150" x2="380" y2="150" stroke="#000000" stroke-width="2"/>
                                <line x1="40" y1="20" x2="40" y2="150" stroke="#000000" stroke-width="2"/>

                                <!-- Y Axis Labels -->
                                <text x="30" y="35" font-size="10" font-weight="700" fill="#6b7280" text-anchor="end">4</text>
                                <text x="30" y="75" font-size="10" font-weight="700" fill="#6b7280" text-anchor="end">3</text>
                                <text x="30" y="115" font-size="10" font-weight="700" fill="#6b7280" text-anchor="end">2</text>
                                <text x="30" y="153" font-size="10" font-weight="700" fill="#6b7280" text-anchor="end">0</text>

                                <!-- Bars -->
                                <!-- Mon (2.5h) -->
                                <rect x="65" y="75" width="34" height="75" fill="#ff0044" stroke="#000" stroke-width="2" rx="3"/>
                                <text x="82" y="168" font-size="10" font-weight="700" fill="#6b7280" text-anchor="middle">Mon</text>

                                <!-- Tue (3.2h) -->
                                <rect x="115" y="54" width="34" height="96" fill="#ff0044" stroke="#000" stroke-width="2" rx="3"/>
                                <text x="132" y="168" font-size="10" font-weight="700" fill="#6b7280" text-anchor="middle">Tue</text>

                                <!-- Wed (1.8h) -->
                                <rect x="165" y="96" width="34" height="54" fill="#ff0044" stroke="#000" stroke-width="2" rx="3"/>
                                <text x="182" y="168" font-size="10" font-weight="700" fill="#6b7280" text-anchor="middle">Wed</text>

                                <!-- Thu (4.0h) -->
                                <rect x="215" y="30" width="34" height="120" fill="#ff0044" stroke="#000" stroke-width="2" rx="3"/>
                                <text x="232" y="168" font-size="10" font-weight="700" fill="#6b7280" text-anchor="middle">Thu</text>

                                <!-- Fri (2.9h) -->
                                <rect x="265" y="63" width="34" height="87" fill="#ff0044" stroke="#000" stroke-width="2" rx="3"/>
                                <text x="282" y="168" font-size="10" font-weight="700" fill="#6b7280" text-anchor="middle">Fri</text>

                                <!-- Sat (1.2h) -->
                                <rect x="315" y="114" width="34" height="36" fill="#ff0044" stroke="#000" stroke-width="2" rx="3"/>
                                <text x="332" y="168" font-size="10" font-weight="700" fill="#6b7280" text-anchor="middle">Sat</text>

                                <!-- Sun (3.5h) -->
                                <rect x="360" y="45" width="30" height="105" fill="#ff0044" stroke="#000" stroke-width="2" rx="3"/>
                                <text x="375" y="168" font-size="10" font-weight="700" fill="#6b7280" text-anchor="middle">Sun</text>
                            </svg>
                        </div>
                    </div>

                    <!-- Chart 2: Accuracy Trend -->
                    <div class="neo-card chart-card">
                        <div class="chart-card-header">
                            <div class="chart-title-wrap">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff0044" stroke-width="2.5">
                                    <circle cx="12" cy="12" r="10"/>
                                    <circle cx="12" cy="12" r="6"/>
                                </svg>
                                <span class="chart-title">ACCURACY TREND</span>
                            </div>
                            <span class="badge-yellow-sm">LAST 8 WEEKS</span>
                        </div>

                        <!-- Line Chart SVG Visual -->
                        <div class="chart-svg-wrapper">
                            <svg viewBox="0 0 400 200" class="chart-svg">
                                <!-- Y Axis Lines -->
                                <line x1="45" y1="30" x2="385" y2="30" stroke="#e5e7eb" stroke-dasharray="4"/>
                                <line x1="45" y1="80" x2="385" y2="80" stroke="#e5e7eb" stroke-dasharray="4"/>
                                <line x1="45" y1="125" x2="385" y2="125" stroke="#e5e7eb" stroke-dasharray="4"/>
                                <line x1="45" y1="160" x2="385" y2="160" stroke="#000000" stroke-width="2"/>
                                <line x1="45" y1="20" x2="45" y2="160" stroke="#000000" stroke-width="2"/>

                                <!-- Y Axis Labels -->
                                <text x="35" y="35" font-size="10" font-weight="700" fill="#6b7280" text-anchor="end">100</text>
                                <text x="35" y="85" font-size="10" font-weight="700" fill="#6b7280" text-anchor="end">80</text>
                                <text x="35" y="128" font-size="10" font-weight="700" fill="#6b7280" text-anchor="end">65</text>
                                <text x="35" y="163" font-size="10" font-weight="700" fill="#6b7280" text-anchor="end">50</text>

                                <!-- Trend Line Path -->
                                <path d="M 60,128 Q 105,110 150,118 T 240,70 T 330,50 T 375,40" fill="none" stroke="#00f0ff" stroke-width="4.5" stroke-linecap="round"/>

                                <!-- Dots -->
                                <circle cx="60" cy="128" r="5" fill="#00f0ff" stroke="#000" stroke-width="2"/>
                                <circle cx="105" cy="115" r="5" fill="#00f0ff" stroke="#000" stroke-width="2"/>
                                <circle cx="150" cy="118" r="5" fill="#00f0ff" stroke="#000" stroke-width="2"/>
                                <circle cx="195" cy="85" r="5" fill="#00f0ff" stroke="#000" stroke-width="2"/>
                                <circle cx="240" cy="75" r="5" fill="#00f0ff" stroke="#000" stroke-width="2"/>
                                <circle cx="285" cy="68" r="5" fill="#00f0ff" stroke="#000" stroke-width="2"/>
                                <circle cx="330" cy="58" r="5" fill="#00f0ff" stroke="#000" stroke-width="2"/>
                                <circle cx="375" cy="40" r="5" fill="#00f0ff" stroke="#000" stroke-width="2"/>

                                <!-- X Axis Labels -->
                                <text x="60" y="178" font-size="10" font-weight="700" fill="#6b7280" text-anchor="middle">W1</text>
                                <text x="105" y="178" font-size="10" font-weight="700" fill="#6b7280" text-anchor="middle">W2</text>
                                <text x="150" y="178" font-size="10" font-weight="700" fill="#6b7280" text-anchor="middle">W3</text>
                                <text x="195" y="178" font-size="10" font-weight="700" fill="#6b7280" text-anchor="middle">W4</text>
                                <text x="240" y="178" font-size="10" font-weight="700" fill="#6b7280" text-anchor="middle">W5</text>
                                <text x="285" y="178" font-size="10" font-weight="700" fill="#6b7280" text-anchor="middle">W6</text>
                                <text x="330" y="178" font-size="10" font-weight="700" fill="#6b7280" text-anchor="middle">W7</text>
                                <text x="375" y="178" font-size="10" font-weight="700" fill="#6b7280" text-anchor="middle">W8</text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
