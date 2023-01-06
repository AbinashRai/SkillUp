const dropdown = document.querySelector('.nav-item dropdown');

dropdown.addEventListener('mouseenter', () => {
  dropdown.style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
  dropdown.style.display = 'none';
});
