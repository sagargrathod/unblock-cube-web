/* ==========================================================================
   src/constants/gameModes.js - 5 Game Modes Configuration
   ========================================================================== */

export const GAME_MODES = [
  {
    id: 'easy',
    badge: 'EASY',
    title: 'Easy Mode',
    subtitle: 'Relaxed • 1,000 Levels',
    description: 'Perfect for warming up your brain. Features straightforward wooden grid puzzles with generous paths and gentle learning progression.',
    theme: 'Light Teak & Pine tones',
    status: 'Accessible',
    statusClass: 'status-accessible',
    image: '/src/assets/images/modes/easy.svg',
    className: 'mode-easy'
  },
  {
    id: 'medium',
    badge: 'MEDIUM',
    title: 'Medium Mode',
    subtitle: 'Strategic • 1,000 Levels',
    description: 'Demands thoughtful moves and strategic planning. Navigate tighter corridors and intricate block configurations to free the red wooden cube.',
    theme: 'Classic Brown & Golden Oak',
    status: 'Strategic',
    statusClass: 'status-strategic',
    image: '/src/assets/images/modes/medium.svg',
    className: 'mode-medium'
  },
  {
    id: 'hard',
    badge: 'HARD',
    title: 'Hard Mode',
    subtitle: 'Complex Obstacles',
    description: 'Designed for seasoned puzzle solvers. Packed with intertwined horizontal and vertical obstacles requiring multi-step foresight.',
    theme: 'Dark Walnut & Mahogany',
    status: 'Demanding',
    statusClass: 'status-demanding',
    image: '/src/assets/images/modes/hard.svg',
    className: 'mode-hard'
  },
  {
    id: 'expert',
    badge: 'EXPERT',
    title: 'Expert Mode',
    subtitle: 'Master Puzzles',
    description: 'The ultimate spatial logic challenge. Tight layouts with minimal clearance where every single slide matters.',
    theme: 'Deep Burnt Wood & Violet',
    status: 'Mastery',
    statusClass: 'status-mastery',
    image: '/src/assets/images/modes/expert.svg',
    className: 'mode-expert'
  },
  {
    id: 'classic',
    badge: 'CLASSIC',
    title: 'Classic Mode',
    subtitle: 'Traditional Board',
    description: 'The timeless wooden sliding block experience inspired by traditional artisanal craftsmanship. Pure, uninterrupted puzzle bliss with organic tactile motion.',
    theme: 'Natural Carved Wood Grain',
    status: 'Timeless Tradition',
    statusClass: 'status-timeless',
    image: '/src/assets/images/modes/classic.svg',
    className: 'mode-classic span-two'
  }
];
