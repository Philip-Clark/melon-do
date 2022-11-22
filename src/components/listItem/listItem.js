import { randomRotation } from '../../applyRandRotation';
import './listItem.css';

const { createElement } = require('../../createHtmlFromTemplate');

const melonTemplate = createElement(
  `
<div class="listItem shadow">
  <h3></h3>
  <p></p>
</div>
  
  `
);

const listItem = (data) => {
  let completed = false;
  const content = melonTemplate.cloneNode(true);
  content.querySelector('h3').textContent = data.title;

  content.addEventListener('mouseenter', () => randomRotation(5));

  content.addEventListener('click', () => {
    completed = !completed;
    randomRotation(5);
    content.setAttribute('completed', completed);
  });

  return content;
};

export default listItem;
