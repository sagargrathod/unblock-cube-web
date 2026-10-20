/* ==========================================================================
   src/components/ModeCard/ModeCard.js
   Reusable Mode Card Component
   ========================================================================== */

import './ModeCard.css';

export function createModeCard(mode) {
  return `
    <div class="mode-card ${mode.className}">
      <div class="mode-header">
        <span class="mode-badge">${mode.badge}</span>
        <span class="mode-levels-count">${mode.subtitle}</span>
      </div>
      <div class="mode-preview-board">
        <img src="${mode.image}" alt="${mode.title} preview illustration" class="mode-preview-img" width="240" height="160" loading="lazy" />
      </div>
      <h3 class="mode-title">${mode.title}</h3>
      <p class="mode-subtitle">${mode.subtitle}</p>
      <p class="mode-desc">${mode.description}</p>
      <div class="mode-footer-meta">
        <span>Theme: ${mode.theme}</span>
        <span class="${mode.statusClass}">● ${mode.status}</span>
      </div>
    </div>
  `;
}
