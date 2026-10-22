const btn = document.getElementById('theme-toggle');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  btn.textContent = dark ? ' Светлая тема' : ' Тёмная тема';
});