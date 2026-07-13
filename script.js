(() => {
    'use strict';

    const root = document.documentElement;
    const THEME_KEY = 'scholarportal-theme';

    // ---------- Theme (dark/light) ----------
    function applyTheme(theme) {
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }
        document.querySelectorAll('.theme-toggle i').forEach((icon) => {
            icon.className = theme === 'dark' ? 'fa fa-sun-o' : 'fa fa-moon-o';
        });
    }

    function currentTheme() {
        return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }

    function toggleTheme() {
        const next = currentTheme() === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem(THEME_KEY, next);
    }

    const savedTheme = localStorage.getItem(THEME_KEY)
        || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);

    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('themeToggleDesktop').addEventListener('click', toggleTheme);

    // ---------- Mobile sidebar ----------
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('overlay');

    function closeSidebar() {
        sidebar.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        overlay.classList.remove('show');
    }

    function toggleSidebar() {
        const isOpen = sidebar.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        overlay.classList.toggle('show', isOpen);
    }

    hamburger.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', closeSidebar);

    // ---------- Active nav item ----------
    const navItems = document.querySelectorAll('.left nav ul li.icon-container');
    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            navItems.forEach((el) => el.classList.remove('active'));
            item.classList.add('active');
            closeSidebar();
        });
    });

    // ---------- Greeting + date ----------
    const greetingEl = document.getElementById('greeting');
    const dateEl = document.getElementById('dateToday');

    function setGreeting() {
        const hour = new Date().getHours();
        let greeting = 'Good evening';
        if (hour < 12) greeting = 'Good morning';
        else if (hour < 18) greeting = 'Good afternoon';
        greetingEl.textContent = `${greeting}, Jane 👋`;

        dateEl.textContent = new Date().toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }
    setGreeting();

    // ---------- Live card search ----------
    const searchInput = document.getElementById('cardSearch');
    const cards = document.querySelectorAll('#cardsGrid .box');
    const noResults = document.getElementById('noResults');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        cards.forEach((card) => {
            const matches = card.dataset.title.includes(query);
            card.classList.toggle('hidden-card', !matches);
            if (matches) visibleCount += 1;
        });

        noResults.hidden = visibleCount !== 0;
    });

    // ---------- Logout confirmation ----------
    document.getElementById('logoutBtn').addEventListener('click', (event) => {
        event.preventDefault();
        const confirmed = window.confirm('Are you sure you want to log out?');
        if (confirmed) {
            greetingEl.textContent = 'You have been logged out.';
        }
    });
})();
