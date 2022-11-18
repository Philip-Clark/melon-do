import { createElement } from './createHtmlFromTemplate';
import './styles/about.css';
import masterChef from './images/masterChef.png';
import sousChef from './images/sousChef.png';
import burger from './images/burger.png';
import Section from './Section';
import Fader from './fader';

const template = createElement(
  `
  <div class="tabContent" id="about">

  </div>
`
);

const About = () => {
  const content = template.cloneNode(true);
  content.appendChild(Section('About Best Burgers', burger));
  content.appendChild(Section('Master Chef', masterChef));
  content.appendChild(Section('Sous Chef', sousChef));
  content.appendChild(Fader());

  return content;
};

export default About;
