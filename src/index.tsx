// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screens/App/App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from './styles/styled-components';
import { BrowserRouter } from 'react-router-dom';

// Themes
import { themePrimary } from './styles/themePrimary';

ReactDOM.render(
    <ThemeProvider theme={themePrimary}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
