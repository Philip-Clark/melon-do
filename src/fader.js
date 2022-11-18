import { createElement } from './createHtmlFromTemplate';

const templateNode = createElement(
  `
  <div id="fader">
  </div>
`
);

const Fader = () => {
  const content = templateNode.cloneNode(true);
  content.style.animation = 'fade 1s forwards';
  return content;
};

export default Fader;
