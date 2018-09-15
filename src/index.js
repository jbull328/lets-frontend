import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-68850833-4');

WebFont.load({
  google: {
    families: ['Rubik', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
