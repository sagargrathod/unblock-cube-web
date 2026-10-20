/* ==========================================================================
   src/screens/AboutScreen/AboutScreen.js
   About Screen Component
   ========================================================================== */

import { APP_CONFIG } from '../../constants/app.js';
import { createPlayStoreButton } from '../../components/PlayStoreButton/PlayStoreButton.js';
import './AboutScreen.css';

export function createAboutScreen() {
  return `
    <main>
      <section class="page-hero">
        <div class="container">
          <span class="section-tag">Behind the Craft</span>
          <h1 class="page-hero-title">The Story of ${APP_CONFIG.appName}</h1>
          <p class="page-hero-subtitle">
            A modern digital homage to timeless wooden joinery, mindful problem solving, and tactile spatial reasoning.
          </p>
        </div>
      </section>

      <section class="page-content-section">
        <div class="container">
          <div class="about-hero-grid">
            <div>
              <span class="section-tag">Our Heritage</span>
              <h2 class="about-main-title">
                From Ancient Artisanship to Modern Touchscreens
              </h2>
              <p class="legal-text">
                Sliding block puzzles have captivated minds for centuries—from traditional Chinese Klotski to Victorian wooden brainteasers. <strong>${APP_CONFIG.appName}</strong> was born from a desire to preserve the rich, calming tactility of genuine hand-carved wood in an era of hyperactive, noisy mobile games.
              </p>
              <p class="legal-text">
                We engineered ${APP_CONFIG.appName} to provide a sanctuary of focus. Every level is crafted as an organic spatial riddle that rewards patience, foresight, and systematic deduction.
              </p>
            </div>
            <div class="about-card-box">
              <h3 class="about-box-title">
                Our Core Mission
              </h3>
              <p class="legal-text">
                1. <strong>Mental Agility:</strong> Stimulating neuroplasticity through daily spatial puzzles.
              </p>
              <p class="legal-text">
                2. <strong>Stress Reduction:</strong> Natural wood grain visuals and earthy acoustic resonance to lower cortisol.
              </p>
              <p class="legal-text">
                3. <strong>Accessible Mastery:</strong> 2,000+ calibrated levels from leisurely casual play to master grandmaster tiers.
              </p>
            </div>
          </div>

          <div class="section-title-wrap left-aligned">
            <span class="section-tag">System Architecture</span>
            <h2 class="section-heading">Detailed Game Mechanics Breakdown</h2>
            <p class="section-lead">
              The mathematical precision powering the 6×6 wooden board physics.
            </p>
          </div>

          <div class="mechanics-grid">
            <div class="mechanic-item">
              <div class="mechanic-badge-icon">📐</div>
              <div class="mechanic-info">
                <h4>6×6 Cartesian Coordinate Grid</h4>
                <p>The puzzle field is constrained to an exact 36-slot square grid. This boundary ensures every obstacle has bounded degrees of freedom and allows mathematical proof of solvability for all 2,000+ levels.</p>
              </div>
            </div>

            <div class="mechanic-item">
              <div class="mechanic-badge-icon">🪵</div>
              <div class="mechanic-info">
                <h4>1×2 & 1×3 Block Geometry</h4>
                <p>Obstacles exist in two distinct lengths: 2-unit blocks and 3-unit long beams. Their directional orientation is locked—horizontal pieces slide exclusively on the X-axis; vertical pieces slide exclusively on the Y-axis.</p>
              </div>
            </div>

            <div class="mechanic-item">
              <div class="mechanic-badge-icon">🔴</div>
              <div class="mechanic-info">
                <h4>The Red Target Cube (The Goal)</h4>
                <p>A horizontally oriented 1×2 scarlet block stationed precisely on Row 3. The victory condition requires shifting all surrounding obstacles until the Red Cube has an unimpeded straight runway to the right exit slot.</p>
              </div>
            </div>

            <div class="mechanic-item">
              <div class="mechanic-badge-icon">⭐</div>
              <div class="mechanic-info">
                <h4>Minimal-Move 3-Star Grading</h4>
                <p>Each level possesses an optimal move threshold determined by our breadth-first search solver. Completing the puzzle within the optimal target yields 3 gold stars, incentivizing strategic economy.</p>
              </div>
            </div>
          </div>

          <div class="acoustic-card-box">
            <h3 class="acoustic-title">
              Acoustic & Tactile Sensations
            </h3>
            <p class="legal-text">
              Digital games often overwhelm the senses. ${APP_CONFIG.appName} takes the opposite approach. Our visual themes—including <strong>Dark Wood</strong> (Burnt Oak, Deep Walnut, and Golden Brown) and <strong>Light Wood</strong> (Sandalwood and Soft Pine)—are chosen to minimize eye strain during evening sessions.
            </p>
            <p class="legal-text">
              The audio feedback replicates the mellow sound of organic oak sliding smoothly against felt-lined wooden grooves, providing deep satisfaction with every single move.
            </p>
          </div>

          <div class="about-cta-wrap">
            <h3 class="about-cta-title">
              Experience the Craftsmanship on Android
            </h3>
            ${createPlayStoreButton()}
          </div>
        </div>
      </section>
    </main>
  `;
}
