/* ==========================================================================
   src/components/PlayStoreButton/PlayStoreButton.js
   Reusable Google Play CTA component (No Apple App Store allowed)
   ========================================================================== */

import { APP_CONFIG } from '../../constants/app.js';
import './PlayStoreButton.css';

export function createPlayStoreButton({ compact = false, label = 'Google Play', subLabel = 'GET IT ON' } = {}) {
  const compactClass = compact ? 'compact' : '';
  
  return `
    <a href="${APP_CONFIG.googlePlayUrl}" target="_blank" rel="noopener noreferrer" class="btn-google-play ${compactClass}" aria-label="Get Unblock Cube on Google Play">
      <img class="play-icon" src="/src/assets/icons/google-play-badge.svg" alt="" width="${compact ? 24 : 32}" height="${compact ? 24 : 32}" aria-hidden="true" />
      <div class="play-text">
        <span class="play-sub">${subLabel}</span>
        <span class="play-main">${label}</span>
      </div>
    </a>
  `;
}
