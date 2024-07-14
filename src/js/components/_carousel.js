const articlesItem = document.querySelectorAll('.article-carousel__item');
const productsItem = document.querySelectorAll('.products__item');

function addActiveClass(itemBlock) {
  itemBlock.forEach(item => {
    item.addEventListener('mouseover', () => {
      itemBlock.forEach(i =>
        i.classList.remove(
          'active',
          'inactive-left',
          'inactive-right',
          'inactive'
        )
      );
      item.classList.add('active');

      const activeIndex = Array.from(articlesItem).indexOf(item);

      itemBlock.forEach((i, index) => {
        if (index < activeIndex) {
          i.classList.add('inactive-left');
        } else if (index > activeIndex) {
          i.classList.add('inactive-right');
        }
      });
    });
  });
}

addActiveClass(articlesItem);
addActiveClass(productsItem);
