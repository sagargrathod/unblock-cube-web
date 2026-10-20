/* ==========================================================================
   src/screens/PrivacyScreen/PrivacyScreen.js
   Privacy Policy View Component (GDPR, CCPA & Google Play Compliant)
   ========================================================================== */

import { APP_CONFIG } from '../../constants/app.js';
import './PrivacyScreen.css';

export function createPrivacyScreen() {
  return `
    <main>
      <section class="page-hero">
        <div class="container">
          <span class="section-tag">Privacy & Data Governance</span>
          <h1 class="page-hero-title">Privacy Policy</h1>
          <p class="page-hero-subtitle">
            Transparent, GDPR, CCPA, and Google Play compliant disclosure of our data practices for ${APP_CONFIG.appName}.
          </p>
          <div class="legal-meta-badge">
            <span>Last Updated: January 1, ${APP_CONFIG.year}</span>
            <span>•</span>
            <span>Application: ${APP_CONFIG.appName}</span>
          </div>
        </div>
      </section>

      <section class="page-content-section">
        <div class="container">
          <article class="legal-article-container">
            <nav class="legal-toc" aria-label="Table of Contents">
              <h3 class="legal-toc-title">Table of Contents</h3>
              <ul class="legal-toc-list">
                <li><a href="#privacy-1" class="legal-toc-link">1. Introduction & Scope</a></li>
                <li><a href="#privacy-2" class="legal-toc-link">2. Information We Collect</a></li>
                <li><a href="#privacy-3" class="legal-toc-link">3. Information We Do NOT Collect</a></li>
                <li><a href="#privacy-4" class="legal-toc-link">4. Google Play Services & SDKs</a></li>
                <li><a href="#privacy-5" class="legal-toc-link">5. Data Retention & Deletion</a></li>
                <li><a href="#privacy-6" class="legal-toc-link">6. Children's Privacy (COPPA)</a></li>
                <li><a href="#privacy-7" class="legal-toc-link">7. Security of Stored Data</a></li>
                <li><a href="#privacy-8" class="legal-toc-link">8. Policy Updates & Contact Details</a></li>
              </ul>
            </nav>

            <section id="privacy-1" class="legal-section-block">
              <h2 class="legal-section-title">
                <span class="section-idx">01.</span> Introduction & Scope
              </h2>
              <p class="legal-text">
                This Privacy Policy explains how <strong>${APP_CONFIG.appName}</strong>, developed by ${APP_CONFIG.developer}, handles, protects, and respects your privacy.
              </p>
              <p class="legal-text">
                We hold a strong privacy-first stance. Our game is built as a pure, offline-friendly logic puzzle designed to entertain you without intruding upon your personal life or tracking your private activities.
              </p>
            </section>

            <section id="privacy-2" class="legal-section-block">
              <h2 class="legal-section-title">
                <span class="section-idx">02.</span> Information We Collect
              </h2>
              <p class="legal-text">
                ${APP_CONFIG.appName} collects only the minimal technical data strictly necessary to guarantee stability, track gameplay state, and diagnose technical errors:
              </p>
              <ul class="legal-list">
                <li><strong>Local Gameplay Progress:</strong> Levels completed, high scores, stars collected (1, 2, or 3 stars), hints remaining, and custom theme preferences. This information is saved locally on your device sandboxed storage.</li>
                <li><strong>Technical Diagnostic Metrics:</strong> Device model, OS build version (Android version), screen resolution, and anonymous crash stack traces (via Google Play Vitals / Crashlytics) to resolve bugs and performance hiccups.</li>
                <li><strong>Anonymous Advertising Identifiers:</strong> If advertisements are served via Google AdMob, Google may process your device's Google Advertising ID (GAID) in accordance with Google Play Developer Policy.</li>
              </ul>
            </section>

            <section id="privacy-3" class="legal-section-block">
              <h2 class="legal-section-title">
                <span class="section-idx">03.</span> Information We Do NOT Collect
              </h2>
              <div class="legal-callout-box">
                <p><strong>Zero Sensitive Data Principle:</strong> ${APP_CONFIG.appName} never requests, collects, or transmits your personal identity or sensitive hardware permissions.</p>
              </div>
              <ul class="legal-list">
                <li><strong>NO Personal Identity:</strong> We do not ask for or collect your name, email address, home address, phone number, or government IDs.</li>
                <li><strong>NO Precise GPS Location:</strong> We never request access to fine or coarse GPS coordinates.</li>
                <li><strong>NO Camera or Microphone Access:</strong> The game does not require camera, microphone, or media capture capabilities.</li>
                <li><strong>NO Contacts or Photos:</strong> We do not access your address book, photos, external documents, or storage files.</li>
              </ul>
            </section>

            <section id="privacy-4" class="legal-section-block">
              <h2 class="legal-section-title">
                <span class="section-idx">04.</span> Google Play Services & Third-Party SDKs
              </h2>
              <p class="legal-text">
                ${APP_CONFIG.appName} relies on verified Google Play ecosystem components to deliver services:
              </p>
              <ul class="legal-list">
                <li><strong>Google Play Services:</strong> Used for app distribution, updates, Google Play Games achievements/cloud backup (if enabled by player). <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="legal-contact-link">Google Privacy Policy</a>.</li>
                <li><strong>Google AdMob:</strong> May be utilized to display non-intrusive advertisements supporting free access to 2,000+ levels. Players can reset or opt out of personalized ads via Android System Settings &gt; Google &gt; Ads.</li>
              </ul>
            </section>

            <section id="privacy-5" class="legal-section-block">
              <h2 class="legal-section-title">
                <span class="section-idx">05.</span> Data Retention & Deletion Requests
              </h2>
              <p class="legal-text">
                Because all game progress data is stored locally in your device's private app directory, you retain absolute control over your records at all times:
              </p>
              <ul class="legal-list">
                <li><strong>Immediate Local Deletion:</strong> You can completely delete all stored game data by clearing app storage (Settings &gt; Apps &gt; ${APP_CONFIG.appName} &gt; Storage &gt; Clear Storage) or by uninstalling the application.</li>
                <li><strong>Cloud Progress:</strong> If you synchronized progress with Google Play Games, you may delete your saved data directly via Google Play Games app settings.</li>
              </ul>
            </section>

            <section id="privacy-6" class="legal-section-block">
              <h2 class="legal-section-title">
                <span class="section-idx">06.</span> Children's Privacy Compliance (COPPA)
              </h2>
              <p class="legal-text">
                ${APP_CONFIG.appName} is a family-friendly sliding puzzle game suitable for audiences of all ages, including children. We strictly comply with the Children’s Online Privacy Protection Act (COPPA) and Google Play Families Policy.
              </p>
              <p class="legal-text">
                We do not knowingly collect personal identifiable information from children under the age of 13. If you believe your child has inadvertently provided personal data, please reach out to us and we will promptly rectify the record.
              </p>
            </section>

            <section id="privacy-7" class="legal-section-block">
              <h2 class="legal-section-title">
                <span class="section-idx">07.</span> Security of Stored Data
              </h2>
              <p class="legal-text">
                We employ standard industry measures to safeguard data against unauthorized alteration or loss. In-app communication with Google Play APIs utilizes encrypted HTTPS/TLS protocols.
              </p>
            </section>

            <section id="privacy-8" class="legal-section-block">
              <h2 class="legal-section-title">
                <span class="section-idx">08.</span> Policy Updates & Developer Contact
              </h2>
              <p class="legal-text">
                We may revise this Privacy Policy periodically to reflect new game features or regulatory requirements. Any updates will be posted to this website URL with an updated revision date.
              </p>
              <div class="legal-callout-box">
                <p><strong>Developer:</strong> ${APP_CONFIG.developer}</p>
                <p><strong>Game:</strong> ${APP_CONFIG.appName}</p>
                <p><strong>Privacy Inquiries & Support:</strong> <a href="mailto:${APP_CONFIG.supportEmail}" class="legal-contact-link">${APP_CONFIG.supportEmail}</a></p>
                <p><strong>Store Page:</strong> <a href="${APP_CONFIG.googlePlayUrl}" target="_blank" rel="noopener noreferrer" class="legal-contact-link">Google Play Store Listing</a></p>
              </div>
            </section>
          </article>
        </div>
      </section>
    </main>
  `;
}
