const articlesItem = document.querySelectorAll('.articles__item');

articlesItem.forEach(item => {
  item.addEventListener('mouseover', () => {
    articlesItem.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});
