import './listItem.css';
import add from '../.././images/addButton.svg';
import addListItemModal, { setId } from '../addModal/addItemModal';

const { createElement } = require('../../createHtmlFromTemplate');

const melonTemplate = createElement(
  `
<div class="listItem addButton" >
<button id="addButton"><img id="addButtonImg"></button>
</div>
  
  `
);

const addListItem = (data) => {
  const content = melonTemplate.cloneNode(true);
  content.querySelector('#addButtonImg').src = add;
  content.querySelector('#addButton').addEventListener('click', () => {
    setId(data);
    document.getElementById('addListItemModal').showModal();
  });

  return content;
};

export default addListItem;
