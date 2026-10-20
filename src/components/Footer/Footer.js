/* ==========================================================================
   src/components/Footer/Footer.js
   Footer Component with Verified Google Play Link & Legal Navigation
   ========================================================================== */

import { APP_CONFIG } from '../../constants/app.js';
import { createPlayStoreButton } from '../PlayStoreButton/PlayStoreButton.js';
import './Footer.css';

export function createFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a href="#/" class="brand-logo">
              <div class="brand-icon">
                <div class="mini-cube"></div>
              </div>
              <div class="brand-text">
                <span class="brand-title">${APP_CONFIG.appName.toUpperCase()}</span>
                <span class="brand-tagline">${APP_CONFIG.tagline}</span>
              </div>
            </a>
            <p class="footer-brand-desc">
              A tranquil yet mind-stimulating wooden sliding block puzzle game featuring 2,000+ handcrafted levels for casual relaxation and brain fitness.
            </p>
            <div class="footer-app-info">
              <span>Official Android Game:</span>
              <span class="app-name-badge">${APP_CONFIG.appName}</span>
            </div>
          </div>

          <div>
            <h3 class="footer-heading">Game Modes</h3>
            <ul class="footer-links">
              <li><a href="#/modes" class="footer-link">Easy Mode (1000 Levels)</a></li>
              <li><a href="#/modes" class="footer-link">Medium Mode (1000 Levels)</a></li>
              <li><a href="#/modes" class="footer-link">Hard Mode</a></li>
              <li><a href="#/modes" class="footer-link">Expert Mode</a></li>
              <li><a href="#/modes" class="footer-link">Classic Mode</a></li>
            </ul>
          </div>

          <div>
            <h3 class="footer-heading">Company & Legal</h3>
            <ul class="footer-links">
              <li><a href="#/about" class="footer-link">About Us & Story</a></li>
              <li><a href="#/privacy" class="footer-link">Privacy Policy</a></li>
              <li><a href="#/terms" class="footer-link">Terms & Conditions</a></li>
              <li><a href="${APP_CONFIG.googlePlayUrl}" target="_blank" rel="noopener noreferrer" class="footer-link">Google Play Store</a></li>
            </ul>
          </div>

          <div>
            <h3 class="footer-heading">Download App</h3>
            <p class="footer-download-sub">
              Available exclusively on Android devices through Google Play.
            </p>
            ${createPlayStoreButton({ compact: true })}
          </div>
        </div>

        <div class="footer-bottom">
          <p>© ${APP_CONFIG.year} ${APP_CONFIG.appName} (v${APP_CONFIG.version}). All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#/privacy" class="footer-link">Privacy Policy</a>
            <span class="footer-divider">•</span>
            <a href="#/terms" class="footer-link">Terms & Conditions</a>
            <span class="footer-divider">•</span>
            <a href="#/about" class="footer-link">About Us</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
