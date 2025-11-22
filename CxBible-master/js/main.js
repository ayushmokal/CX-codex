// Main JavaScript for CodeX
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeMobileMenu();
    initializeSearchToggle();
    initializeScrollEffects();
    initializeHeroButtons();
    initializeThemeToggle();

    if (typeof window.initializeContent === 'function') {
        window.initializeContent();
    }

    initializeTabs();
});

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });

            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Update active nav link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            // Scroll to section
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Close mobile menu if open
            const navList = document.getElementById('navList');
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });
}

function initializeMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');

    if (navToggle && navList) {
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('active');
            }
        });
    }
}

function initializeSearchToggle() {
    const searchToggle = document.getElementById('searchToggle');
    const searchInput = document.getElementById('searchInput');

    if (searchToggle && searchInput) {
        searchToggle.addEventListener('click', function() {
            searchInput.focus();
        });
    }
}

function initializeScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add shadow to header on scroll
        if (scrollTop > 0) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop;
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Navigation function for overview cards
function navigateToSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');

        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (navLink) {
            navLink.classList.add('active');
        }

        // Scroll to section
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Close mobile menu if open
        const navList = document.getElementById('navList');
        if (navList && navList.classList.contains('active')) {
            navList.classList.remove('active');
        }
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
        }
    }

    // Escape to clear search
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('searchInput');
        if (searchInput && document.activeElement === searchInput) {
            searchInput.value = '';
            searchInput.blur();

            // Clear search results
            const existingResults = document.querySelector('.search-results');
            if (existingResults) {
                existingResults.remove();
            }

            // Show overview
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById('overview').classList.add('active');
        }
    }
});



// Performance monitoring
if ('performance' in window && 'timing' in performance) {
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`CodeX loaded in ${loadTime}ms`);
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('CodeX Error:', e.error);
    // Could send error reports to monitoring service here
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('CodeX Unhandled Promise Rejection:', e.reason);
    // Could send error reports to monitoring service here
});

function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabContents.forEach(content => {
        if (content.classList.contains('active')) {
            content.removeAttribute('hidden');
        } else {
            content.setAttribute('hidden', 'hidden');
        }
    });

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });
        tabContents.forEach(content => {
                content.classList.remove('active');
                content.setAttribute('hidden', 'hidden');
            });

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
        const targetContent = document.getElementById(tabId + '-tab');
        if (targetContent) {
            targetContent.classList.add('active');
            targetContent.removeAttribute('hidden');
        }

        // Keep the tab bar visible after switching tabs
        const tabBar = document.querySelector('.blood-vision-tabs');
        if (tabBar) {
            const offset = tabBar.getBoundingClientRect().top + window.pageYOffset - 60;
            window.scrollTo({ top: offset, behavior: 'instant' });
        }
    });
  });
}

function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const label = themeToggle.querySelector('.theme-toggle__label');
    const icon = themeToggle.querySelector('.theme-toggle__icon');

    const storedPreference = localStorage.getItem('cx-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldEnableDark = storedPreference ? storedPreference === 'dark' : prefersDark;

    const applyState = (isDark) => {
        themeToggle.setAttribute('aria-pressed', String(isDark));
        if (label) {
            label.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        }
        if (icon) {
            icon.textContent = isDark ? '☀️' : '🌙';
        }
    };

    if (shouldEnableDark) {
        document.body.classList.add('dark-mode');
        applyState(true);
    } else {
        document.body.classList.remove('dark-mode');
        applyState(false);
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('cx-theme', isDark ? 'dark' : 'light');
        applyState(isDark);
    });
}

function initializeHeroButtons() {
    const heroButtons = document.querySelectorAll('.hero-button[data-target]');

    heroButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                target.classList.add('hero-target-active');
                setTimeout(() => target.classList.remove('hero-target-active'), 1200);
            }
        });
    });
}
