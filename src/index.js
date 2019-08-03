import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
const recipeData = require('./data/recipes.json');

ReactDOM.render(
  <App recipeData={recipeData} />, document.getElementById('root')
);
registerServiceWorker();
