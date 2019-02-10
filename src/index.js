import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import NewApp from "./NewApp";

ReactDOM.render(<NewApp />, document.getElementById('root'));
registerServiceWorker();
