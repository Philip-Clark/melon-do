import melon from '../../images/melonTop.svg';

import './melon.css';

const { createElement } = require('../../createHtmlFromTemplate');

const melonTemplate = createElement(
  `
<div id="melonDiv">
  <img id="melonTop">
  <h1>Melon Do</h1>
</div>
  
  `
);

const Melon = () => {
  const content = melonTemplate.cloneNode(true);
  content.querySelector('#melonTop').src = melon;

  return content;
};

export default Melon;
