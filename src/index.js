import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch} from 'react-router-dom';
import {PersistGate} from "redux-persist/lib/integration/react";

import './index.css';
import configureStore from './store';
import RootContainer from "./containers/RootContainer";

const {store, persistor} = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <PersistGate
            store={store}
            persistor={persistor}
        >
            <BrowserRouter>
                <Switch>
                    <RootContainer/>
                </Switch>
            </BrowserRouter>
        </PersistGate>
    </Provider>
), document.querySelector('#root'));
