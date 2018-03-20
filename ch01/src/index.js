import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Hello from './components/Hello';
import LifeCicle from './components/LifeCicle'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LifeCicle />, document.getElementById('root'));
registerServiceWorker();
