const particles = document.querySelector('.particles');

for (let i = 0; i < 50; i++) {
  const span = document.createElement('span');
  span.style.left = Math.random() * 100 + '%';
  span.style.animationDuration = 5 + Math.random() * 10 + 's';
  particles.appendChild(span);
}
