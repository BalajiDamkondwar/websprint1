/**
 * shell.js — AdaptLearn App Shell
 * Handles: sidebar collapse, tab navigation, mobile overlay, theme toggle
 */

/* ── Page Registry ───────────────────────────────────────────── */
// Each pages/*.js registers itself here before shell.js runs
window.AppPages = window.AppPages || {};

/* ── Elements ────────────────────────────────────────────────── */
const sidebar        = document.getElementById('app-sidebar');
const sidebarToggle  = document.getElementById('sidebar-toggle');
const headerBrand    = document.getElementById('header-brand');
const themeToggle    = document.getElementById('theme-toggle');
const mobileMenuBtn  = document.getElementById('mobile-menu-btn');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const navItems       = document.querySelectorAll('.nav-item');
const tabPanels      = document.querySelectorAll('.tab-panel');

/* ── Sidebar Collapse ────────────────────────────────────────── */
function setSidebarCollapsed(collapsed) {
    sidebar.classList.toggle('collapsed', collapsed);
    headerBrand.classList.toggle('collapsed', collapsed);
    localStorage.setItem('sidebar-collapsed', collapsed);
}

sidebarToggle.addEventListener('click', () => {
    const isCollapsed = sidebar.classList.contains('collapsed');
    setSidebarCollapsed(!isCollapsed);
});

// Restore state from last session
const savedCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
setSidebarCollapsed(savedCollapsed);

/* ── Mobile Sidebar ──────────────────────────────────────────── */
function openMobileSidebar() {
    sidebar.classList.add('mobile-open');
    sidebarOverlay.classList.add('visible');
    sidebarOverlay.setAttribute('aria-hidden', 'false');
}

function closeMobileSidebar() {
    sidebar.classList.remove('mobile-open');
    sidebarOverlay.classList.remove('visible');
    sidebarOverlay.setAttribute('aria-hidden', 'true');
}

mobileMenuBtn.addEventListener('click', openMobileSidebar);
sidebarOverlay.addEventListener('click', closeMobileSidebar);

/* ── Tab Navigation ──────────────────────────────────────────── */
function activateTab(tabId) {
    navItems.forEach(item => {
        const isActive = item.dataset.tab === tabId;
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-current', isActive ? 'page' : 'false');
    });

    tabPanels.forEach(panel => {
        const isActive = panel.id === `panel-${tabId}`;
        panel.classList.toggle('active', isActive);

        if (isActive && !panel.dataset.rendered) {
            const page = window.AppPages[tabId];
            if (page && typeof page.render === 'function') {
                panel.innerHTML = page.render();
                if (typeof page.init === 'function') page.init(panel);
            }
            panel.dataset.rendered = 'true';
        }
    });

    if (window.innerWidth <= 768) closeMobileSidebar();
}

window.activateTab = activateTab;

window.openMission = function(missionData) {
    if (missionData) {
        window.currentMissionData = missionData;
    }
    const missionPanel = document.getElementById('panel-mission');
    if (missionPanel) {
        delete missionPanel.dataset.rendered;
    }
    activateTab('mission');
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Global event delegation for Launch Mission buttons
document.addEventListener('click', e => {
    const launchBtn = e.target.closest('.btn-launch-mission, .start-project-btn, #hero-start-btn, .explore-courses-action');
    if (launchBtn && !launchBtn.id.includes('explore-courses')) {
        e.preventDefault();
        window.openMission();
    }
});

// Global Search bar handler
const globalSearchInput = document.getElementById('global-search');
if (globalSearchInput) {
    globalSearchInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            const query = globalSearchInput.value.trim();
            if (query) {
                window.openMission({
                    title: `${query.toUpperCase()} – EARTH-1610 AI PROTOCOL`,
                    earthTag: 'EARTH-1610',
                    topics: [
                        `01. ${query.toUpperCase()} CORE ARCHITECTURE & BRIEFING`,
                        `02. FUNDAMENTAL PATTERNS & SETUP`,
                        `03. HANDS-ON MISSION: PRACTICAL IMPLEMENTATION`,
                        `04. ADVANCED MULTIVERSE SCALING`,
                        `05. MISSION DEBRIEF & INTEGRATION`
                    ]
                });
            }
        }
    });
}

navItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        activateTab(item.dataset.tab);
    });
});

const initialTab = document.querySelector('.nav-item.active');
if (initialTab) activateTab(initialTab.dataset.tab);

/* ── Theme Toggle ────────────────────────────────────────────── */
const SUN_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1"  x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22"  x2="5.64"  y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1"  y1="12" x2="3"  y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64"  y2="18.36"/>
    <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
</svg>`;

const MOON_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
</svg>`;

function applyTheme(dark) {
    document.body.classList.toggle('dark-mode', dark);
    themeToggle.innerHTML = dark ? SUN_ICON : MOON_ICON;
    themeToggle.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
    applyTheme(!document.body.classList.contains('dark-mode'));
});

// Restore saved theme
applyTheme(localStorage.getItem('theme') === 'dark');
