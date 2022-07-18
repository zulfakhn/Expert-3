import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/detail.css';
import '../styles/responsive.css';
// import './components/jumbotron';
import swRegister from './utils/sw-register';
import App from './views/app';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const skipToContent = document.querySelector('.skip-to-content');
skipToContent.addEventListener('click', () => {
  document.querySelector('#content').scrollIntoView({ behavior: 'smooth' });
  skipToContent.blur();
});

const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();

  swRegister();
});

// app();
