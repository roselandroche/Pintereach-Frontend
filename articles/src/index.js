import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from './reducer/articles';

import './index.css';
import App from './App';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter >
    </Provider>,
    document.getElementById("root")
);


// const AppWithProvider = (<Provider store={store}>
{/* <App/>
</Provider>) */}
// ReactDOM.render(AppWithProvider, document.getElementById('root'));