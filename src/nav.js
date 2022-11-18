import About from './about';
import { createElement } from './createHtmlFromTemplate';
import Home from './home';
import './styles/nav.css';

const elementTemplate = createElement(
  `
  <nav id="navigation">
    <button id="about">About</button>
    <button id="home">Home</button>
  </nav>
`
);

const aboutAction = () => {
  document.querySelector('main').replaceChild(About(), document.querySelector('.tabContent'));
};

const homeAction = () => {
  document.querySelector('main').replaceChild(Home(), document.querySelector('.tabContent'));
};

const Nav = () => {
  const content = elementTemplate.cloneNode(true);

  content.querySelector('#about').addEventListener('click', aboutAction);
  content.querySelector('#home').addEventListener('click', homeAction);

  return content;
};

export default Nav;
