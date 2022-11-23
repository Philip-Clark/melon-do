import './addModal.css';
import add from '../.././images/addButton.svg';
import { lists, saveLists } from '../../lists';
import { randomRotation } from '../../applyRandRotation';
import { addCardToStack } from '../stack/stack';
import { addItemToList } from '../listCard/listCard';

const { createElement } = require('../../createHtmlFromTemplate');

const melonTemplate = createElement(
  `
<dialog class="shadow" id="addListItemModal">
  <h3>Add a Task</h3>
  <form method="dialog"><label>Task Name</label>
  <input type="text" minlength="1" id="taskName" name="listName" placeholder="My Task" maxlength="120">
  <button id="addButton" method="dialog"><img id="addButtonImg"></button>

  
</form>

</dialog>
  
  `
);
let id = 0;
export const setId = (a) => (id = a);
const addListItemModal = () => {
  const content = melonTemplate.cloneNode(true);
  content.querySelector('#addButtonImg').src = add;
  content.querySelector('#addButton').addEventListener('mouseenter', () => randomRotation(20));
  content.querySelector('#addButton').addEventListener('click', () => {
    randomRotation(20);
    console.log('SADASDASDAS', id);
    const newListItem = {
      id: Date.now(),
      title: content.querySelector('#taskName').value,
      completed: false,
    };
    console.log(lists.indexOf(id));
    lists[lists.indexOf(id)].items.push(newListItem);
    saveLists();
    addItemToList(newListItem, id);
  });

  content.addEventListener('mouseenter', () => randomRotation(5));

  return content;
};

export default addListItemModal;
