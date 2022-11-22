import { lists } from './lists';

let currentFocus = lists.length - 1;
export const focusCard = (id) => {
  document.getElementById(currentFocus).setAttribute('current', false);
  document.getElementById(currentFocus).style.zIndex = '0';
  document.getElementById(id).setAttribute('current', true);
  const cards = document.getElementsByClassName('listCard');
  for (let i = 0; i < cards.length; i++) {
    if (i != currentFocus) {
      cards.item(i).style.zIndex = cards.item(i).style.zIndex + 1;
    } else {
      cards.item(i).style.zIndex = 0;
      randomlyPlace(cards.item(i));
    }
    if (cards.item(i).deleted == 'true') {
      cards.item(i).style.zIndex = -999;
    }
  }

  currentFocus = id;
};

export const randomlyPlace = (item) => {
  item.style.transform = `translate(${Math.random() * 10 - 5}px,calc(${
    Math.random() * 10 - 5
  }px + 110%))rotate(${Math.random() * 10 - 5}deg)`;
};
