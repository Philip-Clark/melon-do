import { createElement } from './createHtmlFromTemplate';
import './styles/home.css';
import burger from './images/burger1.png';
import patties from './images/patties.png';
import veggies from './images/veggies.png';
import cheese from './images/cheese.png';
import Section from './Section';
import Fader from './fader';

const homeTempalate = createElement(
  `
  <div class="tabContent" id="home">

  </div>
`
);

const Home = (name) => {
  const content = homeTempalate.cloneNode(true);
  content.appendChild(Section('Best Burgers', burger));
  content.appendChild(Section('Best Patties', patties));
  content.appendChild(Section('Best Veggies', veggies));
  content.appendChild(Section('Best Cheese', cheese));
  content.appendChild(Fader());

  return content;
};

export default Home;
