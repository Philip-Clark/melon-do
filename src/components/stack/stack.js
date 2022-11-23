import './stack.css';
import { randomRotation } from '../../applyRandRotation';
import listCard from '../listCard/listCard';
import { focusCard, randomlyPlace } from '../../focuser';
import { size } from 'lodash';
import { lists } from '../../lists';
import addCard from '../addCard/addCard';

const { createElement } = require('../../createHtmlFromTemplate');

const listCardTemplate = createElement(
  `
<div id="stack">

</div>
  
  `
);
let cardCount = 0;
let content = undefined;

const stack = (list) => {
  content = listCardTemplate.cloneNode(true);

  const addListCard = content.appendChild(addCard());
  addListCard.id = 'add';
  addListCard.style.zIndex = '100';
  randomlyPlace(addListCard);

  list.reverse().forEach((item, index) => {
    addCardToStack(listCard(item));
  });

  return content;
};

export const addCardToStack = (card) => {
  const newCard = content.appendChild(card);
  card.style.zIndex = cardCount;
  randomlyPlace(card);
  cardCount++;
};

export default stack;
