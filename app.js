/**
 * app.js — Login page logic
 * On successful login, redirects to the post-login app shell (app.html).
 */
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        // UI-only auth: redirect to the app shell
        window.location.href = 'app.html';
    });
});
