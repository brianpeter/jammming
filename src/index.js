import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//check step 10 if issue lingers due to app directory
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
