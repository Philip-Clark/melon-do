import { createElement } from './createHtmlFromTemplate';
import './styles/section.css';

const templateNode = createElement(
  `
  <section>
    <img  id="img">
    <div>
      <h1 id="title"></h1>
      <p>Anim fugiat aliqua laboris minim proident ad aliqua et ullamco voluptate cillum. Enim eu sint aliqua duis id velit sint ut in consequat reprehenderit magna nisi. Occaecat enim occaecat ipsum enim labore ex ullamco tempor incididunt.
      </p>
    <div>
  </section>
`
);

const Section = (title, img) => {
  const content = templateNode.cloneNode(true);
  content.querySelector('#img').src = img;
  content.querySelector('#title').textContent = title;
  return content;
};

export default Section;
