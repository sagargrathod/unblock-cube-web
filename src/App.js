/* ==========================================================================
   src/App.js - Application Root & Client-Side Router
   ========================================================================== */

import { createNavbar, initNavbarEvents } from './components/Navbar/Navbar.js';
import { createFooter } from './components/Footer/Footer.js';
import { createHomeScreen, initHomeScreenEvents } from './screens/HomeScreen/HomeScreen.js';
import { createAboutScreen } from './screens/AboutScreen/AboutScreen.js';
import { createTermsScreen } from './screens/TermsScreen/TermsScreen.js';
import { createPrivacyScreen } from './screens/PrivacyScreen/PrivacyScreen.js';

export function renderApp() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  const rawHash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  const route = rawHash.split('?')[0].split('/')[0];

  let screenHtml = '';
  switch (route) {
    case 'about':
      screenHtml = createAboutScreen();
      break;
    case 'terms':
      screenHtml = createTermsScreen();
      break;
    case 'privacy':
      screenHtml = createPrivacyScreen();
      break;
    case 'home':
    case '':
    default:
      screenHtml = createHomeScreen();
      break;
  }

  appContainer.innerHTML = `
    ${createNavbar(route)}
    <div id="screenContainer">${screenHtml}</div>
    ${createFooter()}
    <button class="back-to-top" id="backToTopBtn" aria-label="Back to Top">↑</button>
  `;

  // Attach event handlers
  initNavbarEvents();
  initBackToTop();

  if (route === '' || route === 'home') {
    initHomeScreenEvents();
  }

  // Scroll to top on route change (unless anchor hash like #modes)
  if (!rawHash.startsWith('modes') && !rawHash.startsWith('features') && !rawHash.startsWith('how-to-play') && !rawHash.startsWith('faq')) {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
