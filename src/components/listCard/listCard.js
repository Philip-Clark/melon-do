import listItem from '../listItem/listItem';
import seed from '../../images/seed.svg';
import del from '../../images/delete.svg';
import { eventHandler, focusCard, focusNext } from '../../focuser';
import './listCard.css';
import { randomRotation } from '../../applyRandRotation';
import addListItem from '../listItem/addListItem';
import { deleteList } from '../../lists';

const { createElement } = require('../../createHtmlFromTemplate');

const listCardTemplate = createElement(
  `
<div class="listCard shadow" current="false" deleted="false">
    <button id="deleteButton"><img id="delete"></button>
    <div class="title">
    <svg width="9" height="16"  viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11.52C9 13.9942 6.98528 16 4.5 16C2.01472 16 0 13.9942 0 11.52C0 9.04576 2.01472 0 4.5 0C6.98528 0 9 9.04576 9 11.52Z" id="seed" fill="#B587FF"/>
</svg>

      <h2 class="titleText">
      </h2>
      </div>
      <div class="itemsContainer" expanded="false"></div>
      <a id="seeMore"><p>See More</p></a>
  </div>
  
  `
);

let colors = ['#b587ff', '#c1eb98', '#5ebddb', '#ea6776'];
let colorInt = 0;

const listCard = (list) => {
  // let focusCard = false;
  let expanded = false;
  colorInt = colorInt < colors.length ? colorInt : 0;
  let content = listCardTemplate.cloneNode(true);
  const listContainer = content.querySelector('.itemsContainer');
  content.id = list.id;

  content.querySelector('.titleText').textContent = list.title;
  content.querySelector('#seed').style.fill = colors[colorInt++];

  content.querySelector('#delete').src = del;
  content.querySelector('#deleteButton').addEventListener('mouseenter', () => randomRotation(20));
  content.querySelector('#deleteButton').addEventListener('click', () => {
    console.log('clicked', content);
    content.setAttribute('deleted', true);
    content.id = 'deleted';
    deleteList(list.id);
    setTimeout(() => {
      focusCard('add');
    }, 200);
    setTimeout(() => {
      content.parentNode.removeChild(content);
    }, 5000);
  });

  if (list.items.length < 4) content.querySelector('#seeMore p').style.visibility = 'hidden';

  content.querySelector('#seeMore').addEventListener('click', () => {
    expanded = !expanded;
    listContainer.setAttribute('expanded', expanded);
    content.querySelector('#seeMore p').textContent = expanded == true ? 'See Less' : 'See More';
  });

  const renderChildren = (array) => {
    list.items.forEach((item, index) => listContainer.appendChild(listItem(item, list.id)));
    listContainer.appendChild(addListItem(list));
  };

  eventHandler(content, content.id);

  if (focus == false) {
    content.querySelector('#deleteButton').style.display = 'none';
  }

  renderChildren();

  return content;
};

export const addItemToList = (item, id) => {
  console.log(id);
  const content = document.getElementById(id.id);
  const listContainer = content.querySelector('.itemsContainer');
  listContainer.prepend(listItem(item, item.id));
  if (listContainer.children.length >= 4)
    content.querySelector('#seeMore p').style.visibility = 'visible';
};

export default listCard;
