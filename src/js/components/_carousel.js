const articlesItem = document.querySelectorAll('.article-carousel__item');
const productsItem = document.querySelectorAll('.products__item');

function addActiveClass(itemBlock, shouldExpandOnFirstClick = false) {
  itemBlock.forEach(item => {
    const link = item.querySelector('a');
    if (!shouldExpandOnFirstClick) {
      item.setAttribute('data-expanded', 'false');

      item.addEventListener('click', event => {
        if (item.getAttribute('data-expanded') === 'false') {
          event.preventDefault();
          item.setAttribute('data-expanded', 'true');

          itemBlock.forEach(i => {
            i.classList.remove(
              'active',
              'inactive-left',
              'inactive-right',
              'inactive'
            );
            i.setAttribute('data-expanded', 'false');
          });
          item.classList.add('active');

          const activeIndex = Array.from(itemBlock).indexOf(item);

          itemBlock.forEach((i, index) => {
            if (index < activeIndex) {
              i.classList.add('inactive-left');
            } else if (index > activeIndex) {
              i.classList.add('inactive-right');
            }
          });

          item.setAttribute('data-expanded', 'true');
        }
      });
    } else {
      link.addEventListener('click', () => {});

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

        const activeIndex = Array.from(itemBlock).indexOf(item);

        itemBlock.forEach((i, index) => {
          if (index < activeIndex) {
            i.classList.add('inactive-left');
          } else if (index > activeIndex) {
            i.classList.add('inactive-right');
          }
        });
      });
    }
  });
}

function updateBehaviorBasedOnScreenWidth() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 992) {
    addActiveClass(articlesItem);
  } else {
    addActiveClass(articlesItem, true);
  }

  addActiveClass(productsItem, true);
}

updateBehaviorBasedOnScreenWidth();

window.addEventListener('resize', () => {
  articlesItem.forEach(item => {
    item.replaceWith(item.cloneNode(true));
  });

  productsItem.forEach(item => {
    item.replaceWith(item.cloneNode(true));
  });

  updateBehaviorBasedOnScreenWidth();
});
