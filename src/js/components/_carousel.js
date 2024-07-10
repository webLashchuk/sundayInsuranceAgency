const articlesItem = document.querySelectorAll('.article-carousel__item');

articlesItem.forEach(item => {
  item.addEventListener('mouseover', () => {
    articlesItem.forEach(i =>
      i.classList.remove(
        'active',
        'inactive-left',
        'inactive-right',
        'inactive'
      )
    );
    item.classList.add('active');

    const activeIndex = Array.from(articlesItem).indexOf(item);

    articlesItem.forEach((i, index) => {
      if (index < activeIndex) {
        i.classList.add('inactive-left');
      } else if (index > activeIndex) {
        i.classList.add('inactive-right');
      }
    });
  });
});
