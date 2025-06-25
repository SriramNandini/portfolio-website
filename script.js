const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('theme-dark');
document.body.classList.toggle('theme-light');

const isDark = document.body.classList.contains('theme-dark');
toggleBtn.textContent = isDark ? '🌙' : '🌞';

});
