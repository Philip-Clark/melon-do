import Footer from './footer';
import Home from './home';
import Nav from './nav';
import './styles/main.css';

function Main() {
  const content = document.createElement('main');
  content.appendChild(Home());

  return content;
}

document.body.appendChild(Nav());
document.body.appendChild(Main());
document.body.appendChild(Footer());

// https://gist.github.com/cobyism/4730490
