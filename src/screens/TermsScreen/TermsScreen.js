/* ==========================================================================
   src/screens/TermsScreen/TermsScreen.js
   Terms and Conditions View Component
   ========================================================================== */

import { APP_CONFIG } from '../../constants/app.js';
import './TermsScreen.css';

export function createTermsScreen() {
  return `
    <main>
      <section class="page-hero">
        <div class="container">
          <span class="section-tag">Legal Agreement</span>
          <h1 class="page-hero-title">Terms & Conditions</h1>
          <p class="page-hero-subtitle">
            Please review these terms governing your download, access, and use of the ${APP_CONFIG.appName} mobile application and website.
          </p>
          <div class="legal-meta-badge">
            <span>Effective Date: January 1, ${APP_CONFIG.year}</span>
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
                <li><a href="#section-1" class="legal-toc-link">1. Acceptance of Terms</a></li>
                <li><a href="#section-2" class="legal-toc-link">2. Intellectual Property Rights</a></li>
                <li><a href="#section-3" class="legal-toc-link">3. License to Use</a></li>
                <li><a href="#section-4" class="legal-toc-link">4. User Conduct & Acceptable Use</a></li>
                <li><a href="#section-5" class="legal-toc-link">5. In-Game Currency & Progress</a></li>
                <li><a href="#section-6" class="legal-toc-link">6. Disclaimer of Warranties</a></li>
                <li><a href="#section-7" class="legal-toc-link">7. Updates and Modifications</a></li>
                <li><a href="#section-8" class="legal-toc-link">8. Governing Law & Contact Channel</a></li>
              </ul>
            </nav>

            <section id="section-1" class="legal-section-block">
              <h2 class="legal-section-title">
                <span class="section-idx">01.</span> Acceptance of Terms
              </h2>
              <p class="legal-text">
                By downloading, installing, accessing, or playing the mobile application <strong>${APP_CONFIG.appName}</strong> or using this official website, you ("User", "Player", or "You") agree to be bound by these Terms and Conditions.
              </p>
              <p class="legal-text">
                If you do not agree to these Terms in their entirety, you must immediately cease using the website and uninstall the ${APP_CONFIG.appName} application from all your devices.
              </p>
              <div class="legal-callout-box">
                <p>${APP_CONFIG.appName} is distributed via the official Google Play Store. Your usage is also subject to Google Play’s Terms of Service and developer distribution policies.</p>
              </div>
            </section>

            <section id="section-2" class="legal-section-block">
              <h2 class="legal-section-title">
                <span class="section-idx">02.</span> Intellectual Property Rights
              </h2>
              <p class="legal-text">
                All visual assets, wooden textures, level configurations, puzzle solution algorithms, UI animations, audio effects, trademarks, software code, and logo designs associated with ${APP_CONFIG.appName} are the exclusive intellectual property of the developer (${APP_CONFIG.developer} / development team).
              </p>
              <ul class="legal-list">
                <li><strong>Game Logic & Level Data:</strong> The curated order, geometry, and minimum-move configurations of the 2,000+ levels are proprietary creative works protected under copyright law.</li>
                <li><strong>Trademarks & Artwork:</strong> The "${APP_CONFIG.appName}" moniker, stylized 3D wooden block emblems, and UI visual systems may not be copied, replicated, or repackaged without prior written consent.</li>
              </ul>
            </section>

            <section id="section-3" class="legal-section-block">
              <h2 class="legal-section-title">
                <span class="section-idx">03.</span> License to Use
              </h2>
              <p class="legal-text">
                Subject to your adherence to these Terms, you are granted a limited, personal, revocable, non-exclusive, non-transferable, non-sublicensable license to download and install one copy of ${APP_CONFIG.appName} solely on compatible Android personal devices for non-commercial entertainment purposes.
              </p>
              <p class="legal-text">
                You agree that you will not:
              </p>
              <ul class="legal-list">
                <li>Reverse engineer, decompile, disassemble, or derive the source code of the application or solver engine.</li>
                <li>Modify, adapt, translate, or create derivative software based upon ${APP_CONFIG.appName}.</li>
                <li>Distribute, rent, lease, or sub-license the application APK files outside of authorized Google Play Store channels.</li>
              </ul>
            </section>

            <section id="section-4" class="legal-section-block">
              <h2 class="legal-section-title">
                <span class="section-idx">04.</span> User Conduct & Acceptable Use
              </h2>
              <p class="legal-text">
                When enjoying ${APP_CONFIG.appName} or engaging with community leaderboards, you pledge to behave ethically and in compliance with all relevant local and international laws.
              </p>
              <ul class="legal-list">
                <li>Do not employ automated memory scrapers, bots, or unauthorized speed-run automation tools.</li>
                <li>Do not attempt to disrupt or tamper with internal game assets, cryptographic save files, or advertisement serving protocols.</li>
                <li>Do not claim false ownership or represent modified versions of the APK as official releases.</li>
              </ul>
            </section>

            <section id="section-5" class="legal-section-block">
              <h2 class="legal-section-title">
                <span class="section-idx">05.</span> In-Game Currency & Progress
              </h2>
              <p class="legal-text">
                ${APP_CONFIG.appName} may feature virtual hints, move undos, star ratings, and mode unlocks. All such elements represent virtual items within the software and possess no monetary, real-world, or cash redemption value.
              </p>
              <ul class="legal-list">
                <li><strong>Local Saves:</strong> Progress (levels cleared, 3-star achievements) is primarily recorded on your device’s local application sandboxed storage.</li>
                <li><strong>Device Changes & Data Loss:</strong> Uninstalling the application, clearing device cache, or performing factory resets without cloud synchronization may permanently erase your stored puzzle progress.</li>
              </ul>
            </section>

            <section id="section-6" class="legal-section-block">
              <h2 class="legal-section-title">
                <span class="section-idx">06.</span> Disclaimer of Warranties & Limitation of Liability
              </h2>
              <p class="legal-text">
                ${APP_CONFIG.appName} is provided to you on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis without warranties of any kind, whether express, statutory, or implied.
              </p>
              <p class="legal-text">
                To the fullest extent permissible under applicable law, the developers disclaim all warranties including merchantability, fitness for a particular purpose, and non-infringement. Under no circumstances shall the developer be liable for any direct, indirect, incidental, punitive, or consequential damages resulting from your use of or inability to use the game.
              </p>
            </section>

            <section id="section-7" class="legal-section-block">
              <h2 class="legal-section-title">
                <span class="section-idx">07.</span> Updates and Modifications
              </h2>
              <p class="legal-text">
                We reserve the right to periodically release patches, update level configurations, add new game modes, optimize solver engines, or revise these Terms at our discretion. Continued use of ${APP_CONFIG.appName} following the posting of amended Terms constitutes your agreement to such modifications.
              </p>
            </section>

            <section id="section-8" class="legal-section-block">
              <h2 class="legal-section-title">
                <span class="section-idx">08.</span> Governing Law & Contact Channel
              </h2>
              <p class="legal-text">
                These Terms shall be interpreted and governed in accordance with the applicable laws governing digital consumer software, without regard to conflict of law principles.
              </p>
              <div class="legal-callout-box">
                <p><strong>Developer:</strong> ${APP_CONFIG.developer}</p>
                <p><strong>Game:</strong> ${APP_CONFIG.appName}</p>
                <p><strong>Support Email:</strong> <a href="mailto:${APP_CONFIG.supportEmail}" class="legal-contact-link">${APP_CONFIG.supportEmail}</a></p>
                <p><strong>Store Page:</strong> <a href="${APP_CONFIG.googlePlayUrl}" target="_blank" rel="noopener noreferrer" class="legal-contact-link">Google Play Store Listing</a></p>
              </div>
            </section>
          </article>
        </div>
      </section>
    </main>
  `;
}
