import { randomRotation } from '../../applyRandRotation';
import './addCard.css';
import add from '../.././images/addButton.svg';
import { eventHandler, focusCard } from '../../focuser';

const { createElement } = require('../../createHtmlFromTemplate');

const melonTemplate = createElement(
  `
<div class="listCard shadow addCard" current="false">
  <h3>Add a list</h3>
  <button id="addButton"><img id="addButtonImg"></button>

</div>
  
  `
);

const addCard = () => {
  const content = melonTemplate.cloneNode(true);
  content.querySelector('#addButtonImg').src = add;
  content.querySelector('#addButton').addEventListener('mouseenter', () => randomRotation(20));
  content.querySelector('#addButton').addEventListener('click', () => {
    randomRotation(20);
    document.getElementById('addListModal').showModal();
  });

  content.addEventListener('mouseenter', () => randomRotation(5));

  eventHandler(content, content.id);

  content.setAttribute('current', true);

  return content;
};

window.onload = () => {
  const otherCardWidth = document.getElementById('stack').children[1].clientWidth;
  const otherCardHeight = document.getElementById('stack').children[1].clientHeight;

  document.querySelector('.addCard').style.width = otherCardWidth + 'px';
  document.querySelector('.addCard').style.height = otherCardHeight + 'px';
};

export default addCard;
