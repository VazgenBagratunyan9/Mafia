import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';

// import {BrowserRouter} from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react"

import {Provider} from "react-redux";

import { store } from "src/redux/store";

ReactDOM.render(
    <Provider store={store}>
        {/*<PersistGate persistor={persistor}>*/}
        {/*    <BrowserRouter>*/}
                <App />
            {/*</BrowserRouter>*/}
        {/*</PersistGate>*/}
    </Provider>,
  document.getElementById('root')
);


