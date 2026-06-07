// في الـ JS
setTimeout(() => {
  document.getElementById('welcome-overlay').classList.add('visible');
}, 100);

function dismissWelcome() {
  const overlay = document.getElementById('welcome-overlay');
  overlay.classList.add('hidden');
}