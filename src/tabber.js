import About from './about';
import Home from './home';

export function switchTab(tab) {
  if (tab == 'about') {
    return About;
  } else if (tab == 'home') {
    return Home;
  }
}
