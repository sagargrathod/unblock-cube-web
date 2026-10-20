/* ==========================================================================
   src/main.js - Web Application Entry Point
   ========================================================================== */

import './styles/variables.css';
import './styles/global.css';
import { renderApp } from './App.js';

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  window.addEventListener('hashchange', renderApp);
});
