import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './nav/index';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Nav />, document.getElementById('root'));
registerServiceWorker();
