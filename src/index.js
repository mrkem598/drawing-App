import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SideButton from './SideButton';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
