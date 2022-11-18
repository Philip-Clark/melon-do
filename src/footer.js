import { createElement } from './createHtmlFromTemplate';
import './styles/nav.css';

const elementTemplate = createElement(
  `
  <nav id="navigation">
    <a href="https://philip-clark.github.io">Visit Authors Site</a>
  </nav>
`
);

const Footer = () => {
  const content = elementTemplate.cloneNode(true);

  return content;
};

export default Footer;
