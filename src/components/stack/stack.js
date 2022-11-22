import './stack.css';
import { randomRotation } from '../../applyRandRotation';
import listCard from '../listCard/listCard';
import { focusCard, randomlyPlace } from '../../focuser';
import { size } from 'lodash';
import { lists } from '../../lists';

const { createElement } = require('../../createHtmlFromTemplate');

const listCardTemplate = createElement(
  `
<div id="stack">

</div>
  
  `
);

const stack = (list) => {
  const content = listCardTemplate.cloneNode(true);
  list.reverse().forEach((item, index) => {
    const card = content.appendChild(listCard(item, false));
    card.id = index;
    if (index == lists.length - 1) card.setAttribute('current', true);

    randomlyPlace(card);
  });

  return content;
};

export default stack;
