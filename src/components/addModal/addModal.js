import './addModal.css';
import add from '../.././images/addButton.svg';
import { lists, saveLists } from '../../lists';
import { randomRotation } from '../../applyRandRotation';
import { addCardToStack } from '../stack/stack';
import listCard from '../listCard/listCard';

const { createElement } = require('../../createHtmlFromTemplate');

const melonTemplate = createElement(
  `
<dialog class="shadow" id="addListModal">
  <h3>Add a list</h3>
  <form method="dialog"><label>List Name</label>
  <input type="text" minlength="1" id="listName" name="listName" placeholder="My todo list" maxlength="120">
  <button id="addButton" method="dialog"><img id="addButtonImg"></button>

  
</form>

</dialog>
  
  `
);
const addListModal = () => {
  const content = melonTemplate.cloneNode(true);
  content.querySelector('#addButtonImg').src = add;
  content.querySelector('#addButton').addEventListener('mouseenter', () => randomRotation(20));
  content.querySelector('#addButton').addEventListener('click', () => {
    randomRotation(20);
    const newItem = {
      title: content.querySelector('#listName').value,
      id: Date.now(),
      items: [],
    };
    lists.push(newItem);
    saveLists();
    addCardToStack(listCard(newItem));
  });

  content.addEventListener('mouseenter', () => randomRotation(5));

  return content;
};

export default addListModal;
