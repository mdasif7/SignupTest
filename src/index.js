import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import SignupReducer from './store/reducers/signupPage';
import { reducer as reduxFormReducer } from 'redux-form';


const rootReducer = combineReducers({
    SignupReducer,form:reduxFormReducer

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk)));

const app =(
    <Provider store={store}>
        
        <BrowserRouter>
            <App />
        </BrowserRouter>
       
    </Provider>
    
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
