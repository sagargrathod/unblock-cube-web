/* ==========================================================================
   src/components/Navbar/Navbar.js
   Sticky Header & Navigation Component
   ========================================================================== */

import { APP_CONFIG } from '../../constants/app.js';
import './Navbar.css';

export function createNavbar(currentRoute = '') {
  const isHome = currentRoute === '' || currentRoute === 'home';
  const isAbout = currentRoute === 'about';
  const isTerms = currentRoute === 'terms';
  const isPrivacy = currentRoute === 'privacy';

  return `
    <header class="site-header" id="siteHeader">
      <div class="container nav-wrapper">
        <a href="#/" class="brand-logo" aria-label="Unblock Cube Home">
          <div class="brand-icon">
            <div class="mini-cube"></div>
          </div>
          <div class="brand-text">
            <span class="brand-title">${APP_CONFIG.appName.toUpperCase()}</span>
            <span class="brand-tagline">${APP_CONFIG.tagline}</span>
          </div>
        </a>

        <nav aria-label="Primary Navigation">
          <ul class="nav-menu" id="navMenu">
            <li><a href="#/" class="nav-link ${isHome ? 'active' : ''}">Home</a></li>
            <li><a href="#/about" class="nav-link ${isAbout ? 'active' : ''}">About</a></li>
            <li><a href="#/terms" class="nav-link ${isTerms ? 'active' : ''}">Terms</a></li>
            <li><a href="#/privacy" class="nav-link ${isPrivacy ? 'active' : ''}">Privacy Policy</a></li>
          </ul>
        </nav>

        <div class="nav-cta">
          <a href="${APP_CONFIG.googlePlayUrl}" target="_blank" rel="noopener noreferrer" class="btn-header-play" id="headerCtaBtn">
            <img src="/src/assets/icons/google-play-badge.svg" alt="" width="18" height="18" aria-hidden="true" />
            <span>Get on Google Play</span>
          </a>

          <button class="hamburger-btn" id="hamburgerBtn" aria-label="Toggle Navigation Menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

export function initNavbarEvents() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const siteHeader = document.getElementById('siteHeader');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('active', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  });
}
