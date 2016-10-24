import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import MyRoutes from './components/routes';

ReactDOM.render(<Router history={browserHistory}>{MyRoutes}</Router>,
                document.getElementById('react-container'));
