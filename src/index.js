import Melon from './components/melon/melon.js';
import { randomRotation } from './applyRandRotation.js';
import './styles/main.css';
import listCard from './components/listCard/listCard.js';
import { getLists, lists } from './lists.js';
import stack from './components/stack/stack.js';
import addModal from './components/addModal/addModal.js';
import addListModal from './components/addModal/addModal.js';
import addListItemModal from './components/addModal/addItemModal.js';

const { createElement } = require('./createHtmlFromTemplate');

const mainTemplate = createElement(
  `
  
<main>
  <div id="listContainer"></div>
</main>


  
  `
);

const Main = () => {
  const content = mainTemplate.cloneNode(true);
  getLists();
  content.append(stack(lists));
  content.appendChild(addListModal());
  content.appendChild(addListItemModal());
  return content;
};
document.body.append(Melon());
document.body.append(Main());

// https://gist.github.com/cobyism/4730490
