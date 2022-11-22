import Melon from './components/melon/melon.js';
import add from './images/addButton.svg';
import { randomRotation } from './applyRandRotation.js';
import './styles/main.css';
import listCard from './components/listCard/listCard.js';
import { lists } from './lists.js';
import stack from './components/stack/stack.js';

const { createElement } = require('./createHtmlFromTemplate');

const mainTemplate = createElement(
  `
  
<main>
  <div id="listContainer"></div>
  <button id="addButton"><img id="addButtonImg"></button>
</main>


  
  `
);

const Main = () => {
  const content = mainTemplate.cloneNode(true);
  content.querySelector('#addButtonImg').src = add;
  content.querySelector('#addButton').addEventListener('mouseenter', () => randomRotation(20));
  content.querySelector('#addButton').addEventListener('click', () => randomRotation(20));

  content.append(stack(lists));

  return content;
};
document.body.append(Melon());
document.body.append(Main());

// https://gist.github.com/cobyism/4730490
