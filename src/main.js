
import './style.css';

const portfolio = document.querySelector('#portfolio');
const toggle = document.querySelector('#theme-toggle');

toggle?.addEventListener('click', () => {
  const isDark = portfolio.classList.toggle('dark');

  toggle.setAttribute('aria-pressed', String(isDark));
  toggle.setAttribute(
    'aria-label',
    isDark ? 'Attiva il tema chiaro' : 'Attiva il tema scuro'
  );
});
