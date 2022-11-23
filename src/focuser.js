import { lists } from './lists';

let currentFocus = 'add';

export const focusCard = (id) => {
  if (id != currentFocus || lists.length == 0) {
    const lastCard = document.getElementById(currentFocus);

    if (lastCard != null) {
      lastCard.setAttribute('current', false);
      lastCard.style.zIndex = '0';
      const listContainer = lastCard.querySelector('.itemsContainer');
      if (listContainer != null) listContainer.setAttribute('expanded', false);
    }

    document.getElementById(id).setAttribute('current', true);
    document.getElementById(id).style.zIndex = 100;

    const cards = document.getElementsByClassName('listCard');

    for (let i = 0; i < cards.length; i++) {
      cards.item(i).style.zIndex = `${parseInt(cards.item(i).style.zIndex) + 1}`;

      if (cards.item(i).deleted == 'true') {
        cards.item(i).style.zIndex = -999;
      }
    }

    currentFocus = id;
  }
};

export const randomlyPlace = (item) => {
  item.style.transform = `translate(${Math.random() * 10 - 5}px,calc(${
    Math.random() * 10 - 5
  }px + 110%))rotate(${Math.random() * 10 - 5}deg)`;
};

export const eventHandler = (content, id) => {
  content.addEventListener('click', () => {
    focusAction();
  });
  // content.addEventListener('touchmove', (e) => {
  //   focusAction();
  // });

  const focusAction = () => {
    focusCard(content.id);
  };
};
