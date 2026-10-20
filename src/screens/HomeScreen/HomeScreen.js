/* ==========================================================================
   src/screens/HomeScreen/HomeScreen.js
   Home View Component with 6x6 Playable Board & 5 Game Modes
   ========================================================================== */

import { APP_CONFIG } from '../../constants/app.js';
import { GAME_MODES } from '../../constants/gameModes.js';
import { createPlayStoreButton } from '../../components/PlayStoreButton/PlayStoreButton.js';
import { createModeCard } from '../../components/ModeCard/ModeCard.js';
import './HomeScreen.css';

export function createHomeScreen() {
  const modesHtml = GAME_MODES.map(mode => createModeCard(mode)).join('');

  return `
    <main>
      <!-- Hero Section -->
      <section class="hero-section" id="hero">
        <div class="container hero-grid">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="sparkle">★</span>
              <span>Official Mobile Puzzle Release • v${APP_CONFIG.version}</span>
            </div>
            <h1 class="hero-title">
              Slide. Unblock. <br />
              <span class="highlight-wood">Master the Wooden Cube.</span>
            </h1>
            <p class="hero-subtitle">
              Experience 2,000+ handcrafted wooden puzzle levels designed to sharpen your mind and relax your senses with tactile sliding mechanics.
            </p>

            <div class="hero-cta-group">
              ${createPlayStoreButton()}
              <a href="#modes" class="btn-secondary-link">
                <span>Explore 5 Modes</span>
                <span>↓</span>
              </a>
            </div>

            <div class="hero-quick-meta">
              <div class="meta-item">
                <span class="meta-number">2,000+</span>
                <span class="meta-label">Levels to Solve</span>
              </div>
              <div class="meta-item">
                <span class="meta-number">5</span>
                <span class="meta-label">Unique Modes</span>
              </div>
              <div class="meta-item">
                <span class="meta-number">100%</span>
                <span class="meta-label">Offline Playable</span>
              </div>
              <div class="meta-item">
                <span class="meta-number">Free</span>
                <span class="meta-label">On Google Play</span>
              </div>
            </div>
          </div>

          <!-- Hero Graphic: Stylized CSS/SVG 3D interactive preview of the 6x6 wooden board -->
          <div class="hero-visual-card">
            <div class="wood-board-chassis">
              <div class="board-header">
                <span class="board-tag">🪵 Interactive Preview • 6×6 Board</span>
                <div class="board-stars" title="3-Star Target">
                  ★ ★ ★
                </div>
              </div>

              <div class="puzzle-board-frame" id="puzzleBoardFrame">
                <div class="puzzle-exit-indicator" title="Exit Gate"></div>
                <span class="puzzle-exit-label">EXIT ►</span>

                <div class="board-grid-slots" aria-hidden="true">
                  <div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div>
                  <div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div>
                  <div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div>
                  <div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div>
                  <div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div>
                  <div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div><div class="grid-cell"></div>
                </div>

                <div class="puzzle-blocks-layer" id="puzzleBlocksLayer"></div>

                <div class="puzzle-victory-notice" id="puzzleVictoryNotice">
                  <h4>🎉 UNBLOCKED!</h4>
                  <p>Outstanding! You freed the Red Cube. Ready for 2,000+ more handcrafted puzzles?</p>
                  <div class="victory-actions">
                    <button class="btn-play-again" id="boardResetBtn">Replay Demo</button>
                    <a href="${APP_CONFIG.googlePlayUrl}" target="_blank" rel="noopener noreferrer" class="btn-play-again accent-red">Download App</a>
                  </div>
                </div>
              </div>

              <div class="board-footer-controls">
                <span class="board-move-counter">Moves Made: <strong id="boardMoveCount">0</strong></span>
                <button class="btn-board-hint" id="boardHintBtn" title="Solve Hint">
                  <span>💡 Solver Hint</span>
                </button>
              </div>
              <p class="interactive-tip">👆 Drag or swipe blocks to slide the red block through the exit!</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Features Section -->
      <section class="features-section" id="features">
        <div class="container">
          <div class="section-title-wrap">
            <span class="section-tag">Game Highlights</span>
            <h2 class="section-heading">Designed for Mindful Puzzle Mastery</h2>
            <p class="section-lead">
              Every millimeter of Unblock Cube is tuned for organic satisfaction, cerebral challenge, and uninterrupted zen gameplay.
            </p>
          </div>

          <div class="features-grid">
            <div class="feature-box">
              <div class="feature-icon-wrap">🪵</div>
              <h3 class="feature-title">Authentic Wooden Aesthetics</h3>
              <p class="feature-desc">
                Warm, natural wood textures, hand-carved tactile visual feedback, and soothing acoustic clicks for an organic sensory experience.
              </p>
            </div>

            <div class="feature-box">
              <div class="feature-icon-wrap">🧠</div>
              <h3 class="feature-title">Over 2,000 Handcrafted Levels</h3>
              <p class="feature-desc">
                1,000 Easy levels + 1,000 Medium levels, plus specialized Hard and Expert challenges calibrated for continuous brain growth.
              </p>
            </div>

            <div class="feature-box">
              <div class="feature-icon-wrap">💡</div>
              <h3 class="feature-title">Smart Hint & Solver Engine</h3>
              <p class="feature-desc">
                Never get stuck again. Built-in algorithmic solver provides gentle step-by-step guidance showing the optimal moves to clear any level.
              </p>
            </div>

            <div class="feature-box">
              <div class="feature-icon-wrap">📴</div>
              <h3 class="feature-title">100% Offline Playable</h3>
              <p class="feature-desc">
                Enjoy all puzzle levels anywhere, anytime—whether in airplane mode, on daily commutes, or during cozy off-grid moments.
              </p>
            </div>

            <div class="feature-box">
              <div class="feature-icon-wrap">🌐</div>
              <h3 class="feature-title">Multi-Language Support</h3>
              <p class="feature-desc">
                Carefully localized across 10+ international languages so players worldwide can enjoy seamless puzzle solving.
              </p>
            </div>

            <div class="feature-box">
              <div class="feature-icon-wrap">⭐</div>
              <h3 class="feature-title">3-Star Precision Scoring</h3>
              <p class="feature-desc">
                Challenge yourself to find the minimal move count. Earn 3 gold stars on every board and become a recognized puzzle grandmaster.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Game Modes Section (All 5 Modes) -->
      <section class="modes-section" id="modes">
        <div class="container">
          <div class="section-title-wrap">
            <span class="section-tag">Explore The Journey</span>
            <h2 class="section-heading">5 Distinct Game Modes</h2>
            <p class="section-lead">
              From relaxed warm-ups to mind-bending master corridors, choose the difficulty that matches your mood and experience.
            </p>
          </div>

          <div class="modes-grid">
            ${modesHtml}
          </div>
        </div>
      </section>

      <!-- Gameplay Preview / How to Play -->
      <section class="steps-section" id="how-to-play">
        <div class="container">
          <div class="section-title-wrap">
            <span class="section-tag">Quick Start Guide</span>
            <h2 class="section-heading">How to Play Unblock Cube</h2>
            <p class="section-lead">
              The rules are wonderfully simple, but the tactical depth will keep your mind engaged for hours.
            </p>
          </div>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-number">1</div>
              <div class="step-illustration">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="10" y="10" width="80" height="80" rx="10" fill="#2E1A12" stroke="#C58A3A" stroke-width="2"/>
                  <rect x="20" y="25" width="60" height="20" rx="4" fill="#8B5A2B"/>
                  <rect x="25" y="55" width="20" height="30" rx="4" fill="#6B3E26"/>
                  <circle cx="50" cy="50" r="14" fill="none" stroke="#FFD23F" stroke-width="2" stroke-dasharray="3 3"/>
                </svg>
              </div>
              <h3 class="step-title">Analyze Orientations</h3>
              <p class="step-text">
                Examine the board. Horizontal wooden blocks only slide horizontally (left and right), while vertical blocks only slide up and down.
              </p>
            </div>

            <div class="step-card">
              <div class="step-number">2</div>
              <div class="step-illustration">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="10" y="10" width="80" height="80" rx="10" fill="#2E1A12" stroke="#C58A3A" stroke-width="2"/>
                  <path d="M20 50h60M70 42l10 8-10 8" stroke="#FFD23F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect x="25" y="38" width="45" height="24" rx="4" fill="#8B5A2B" stroke="#C58A3A"/>
                </svg>
              </div>
              <h3 class="step-title">Slide Obstacles Away</h3>
              <p class="step-text">
                Slide blocking wooden bars to create a clear corridor. Work in sequences—sometimes you must shift an obstacle back and forth to open room.
              </p>
            </div>

            <div class="step-card">
              <div class="step-number">3</div>
              <div class="step-illustration">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="10" y="10" width="80" height="80" rx="10" fill="#2E1A12" stroke="#C58A3A" stroke-width="2"/>
                  <path d="M88 40h4v20h-4z" fill="#C58A3A"/>
                  <rect x="42" y="40" width="45" height="20" rx="4" fill="#EA4335" stroke="#FFA494"/>
                  <path d="M75 50h20M88 44l7 6-7 6" stroke="#34A853" stroke-width="3" stroke-linecap="round"/>
                </svg>
              </div>
              <h3 class="step-title">Free the Red Cube</h3>
              <p class="step-text">
                Once the exit gate on the right is unobstructed, slide the signature Red Target Cube all the way out to complete the level and claim your 3 stars!
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section" id="faq">
        <div class="container">
          <div class="section-title-wrap">
            <span class="section-tag">Got Questions?</span>
            <h2 class="section-heading">Frequently Asked Questions</h2>
            <p class="section-lead">
              Everything you need to know about playing, offline progress, and updates for Unblock Cube.
            </p>
          </div>

          <div class="faq-list">
            <div class="faq-item active">
              <button class="faq-trigger" aria-expanded="true">
                <span>Can I play Unblock Cube completely offline?</span>
                <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div class="faq-content">
                <p>Yes, absolutely! Unblock Cube is 100% playable offline without requiring any active internet connection or mobile data. All 2,000+ levels are stored directly in the app bundle.</p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span>Where can I download Unblock Cube?</span>
                <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div class="faq-content">
                <p>Unblock Cube is available exclusively for Android devices on Google Play Store. You can download it directly using the verified links on this website.</p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span>How do the Hints and Solver engine work?</span>
                <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div class="faq-content">
                <p>Whenever you feel trapped, tap the lightbulb icon in the game. Our algorithmic solver calculates the shortest mathematical solution from your current board state and highlights the exact block to move.</p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span>Is my level progress saved automatically?</span>
                <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div class="faq-content">
                <p>Yes. Every time you complete a level or earn 3 stars, your progress and high scores are saved locally onto your device storage automatically.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pre-Footer CTA Banner -->
      <section class="cta-banner-section">
        <div class="container">
          <div class="cta-banner-card">
            <div class="cta-content">
              <h2 class="cta-title">Ready to Sharpen Your Brain?</h2>
              <p class="cta-desc">
                Download Unblock Cube today on Google Play Store and start sliding through thousands of artisanal wooden puzzles.
              </p>
            </div>
            ${createPlayStoreButton({ label: 'Google Play', subLabel: 'GET IT ON' })}
          </div>
        </div>
      </section>
    </main>
  `;
}

export function initHomeScreenEvents() {
  initHomeScreenPuzzle();
  initHomeScreenFaq();
}

function initHomeScreenFaq() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    if (trigger && content) {
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherContent = otherItem.querySelector('.faq-content');
            if (otherContent) otherContent.style.maxHeight = null;
          }
        });
        if (isActive) {
          item.classList.remove('active');
          content.style.maxHeight = null;
        } else {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  });
}

function initHomeScreenPuzzle() {
  const boardLayer = document.getElementById('puzzleBlocksLayer');
  const moveCounterEl = document.getElementById('boardMoveCount');
  const hintBtn = document.getElementById('boardHintBtn');
  const resetBtn = document.getElementById('boardResetBtn');
  const victoryNotice = document.getElementById('puzzleVictoryNotice');

  if (!boardLayer) return;

  let moves = 0;
  let isSolved = false;

  const initialBlocks = [
    { id: 'red', isTarget: true, orientation: 'H', length: 2, x: 1, y: 2, className: 'block-red' },
    { id: 'b1', orientation: 'V', length: 2, x: 0, y: 0, className: 'wood-v' },
    { id: 'b2', orientation: 'H', length: 2, x: 1, y: 0, className: 'wood-h' },
    { id: 'b3', orientation: 'V', length: 3, x: 3, y: 0, className: 'wood-v' },
    { id: 'b4', orientation: 'H', length: 2, x: 4, y: 0, className: 'wood-h' },
    { id: 'b5', orientation: 'V', length: 2, x: 0, y: 2, className: 'wood-v' },
    { id: 'b6', orientation: 'V', length: 3, x: 3, y: 3, className: 'wood-v' },
    { id: 'b7', orientation: 'H', length: 2, x: 1, y: 4, className: 'wood-h' },
    { id: 'b8', orientation: 'V', length: 2, x: 5, y: 2, className: 'wood-v' },
    { id: 'b9', orientation: 'H', length: 2, x: 4, y: 5, className: 'wood-h' }
  ];

  let currentBlocks = JSON.parse(JSON.stringify(initialBlocks));

  function renderBlocks() {
    boardLayer.innerHTML = '';
    currentBlocks.forEach(block => {
      const el = document.createElement('div');
      el.classList.add('puzzle-block', block.className);
      el.dataset.id = block.id;

      el.style.gridColumnStart = block.x + 1;
      el.style.gridColumnEnd = block.orientation === 'H' ? block.x + 1 + block.length : block.x + 2;
      el.style.gridRowStart = block.y + 1;
      el.style.gridRowEnd = block.orientation === 'V' ? block.y + 1 + block.length : block.y + 2;

      if (block.isTarget) {
        const handle = document.createElement('div');
        handle.classList.add('block-handle');
        el.appendChild(handle);
      }

      setupBlockInteractions(el, block);
      boardLayer.appendChild(el);
    });

    if (moveCounterEl) {
      moveCounterEl.textContent = moves;
    }
  }

  function setupBlockInteractions(el, block) {
    let startPointerPos = 0;
    let isDragging = false;

    const onPointerDown = (e) => {
      if (isSolved) return;
      isDragging = true;
      startPointerPos = block.orientation === 'H' ? e.clientX : e.clientY;
      el.style.cursor = 'grabbing';
      el.setPointerCapture?.(e.pointerId);

      const onPointerMove = (moveEvent) => {
        if (!isDragging) return;
        const currentPos = block.orientation === 'H' ? moveEvent.clientX : moveEvent.clientY;
        const diff = currentPos - startPointerPos;
        const threshold = 32;

        if (diff > threshold) {
          tryMove(block, 1);
          startPointerPos = currentPos;
        } else if (diff < -threshold) {
          tryMove(block, -1);
          startPointerPos = currentPos;
        }
      };

      const onPointerUp = (upEvent) => {
        isDragging = false;
        el.style.cursor = 'grab';
        try {
          el.releasePointerCapture?.(upEvent.pointerId);
        } catch (_) {}
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
      };

      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    };

    el.addEventListener('pointerdown', onPointerDown);

    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', `${block.isTarget ? 'Red Target Cube' : 'Wooden Block'} at column ${block.x + 1}, row ${block.y + 1}`);

    el.addEventListener('keydown', (e) => {
      if (isSolved) return;
      if (block.orientation === 'H') {
        if (e.key === 'ArrowRight') { e.preventDefault(); tryMove(block, 1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); tryMove(block, -1); }
      } else {
        if (e.key === 'ArrowDown') { e.preventDefault(); tryMove(block, 1); }
        if (e.key === 'ArrowUp') { e.preventDefault(); tryMove(block, -1); }
      }
    });
  }

  function tryMove(block, delta) {
    const newX = block.orientation === 'H' ? block.x + delta : block.x;
    const newY = block.orientation === 'V' ? block.y + delta : block.y;

    if (newX < 0 || newY < 0) return false;
    if (block.orientation === 'H' && newX + block.length > 6) return false;
    if (block.orientation === 'V' && newY + block.length > 6) return false;

    const testCells = [];
    for (let i = 0; i < block.length; i++) {
      testCells.push({
        x: block.orientation === 'H' ? newX + i : newX,
        y: block.orientation === 'V' ? newY + i : newY
      });
    }

    const hasCollision = currentBlocks.some(other => {
      if (other.id === block.id) return false;
      for (let i = 0; i < other.length; i++) {
        const ox = other.orientation === 'H' ? other.x + i : other.x;
        const oy = other.orientation === 'V' ? other.y + i : other.y;
        if (testCells.some(c => c.x === ox && c.y === oy)) {
          return true;
        }
      }
      return false;
    });

    if (hasCollision) return false;

    block.x = newX;
    block.y = newY;
    moves++;
    renderBlocks();

    if (block.isTarget && block.x === 4 && block.y === 2) {
      isSolved = true;
      if (victoryNotice) {
        victoryNotice.style.display = 'flex';
      }
    }

    return true;
  }

  if (hintBtn) {
    hintBtn.addEventListener('click', () => {
      if (isSolved) return;
      const solutionMoves = [
        { id: 'b8', delta: 2 },
        { id: 'red', delta: 1 },
        { id: 'b3', delta: 1 },
        { id: 'red', delta: 2 }
      ];

      let step = 0;
      const interval = setInterval(() => {
        if (step >= solutionMoves.length || isSolved) {
          clearInterval(interval);
          return;
        }
        const move = solutionMoves[step];
        const block = currentBlocks.find(b => b.id === move.id);
        if (block) {
          tryMove(block, move.delta);
        }
        step++;
      }, 400);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentBlocks = JSON.parse(JSON.stringify(initialBlocks));
      moves = 0;
      isSolved = false;
      if (victoryNotice) {
        victoryNotice.style.display = 'none';
      }
      renderBlocks();
    });
  }

  renderBlocks();
}
