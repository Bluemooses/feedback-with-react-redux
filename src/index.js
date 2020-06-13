import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

//State .0.1.2.3 start empty.
let initFeedBack = {
    feeling: ' ',
    understanding: ' ',
    support: ' ',
    comments: ' '
}

//Reducer adds or detracts from reduxState based on actions or inaction.
const feedBack = (state = initFeedBack, action) => {
    switch(action.type) {
        case 'NEXT_BUTTON':
            return{
                ...state,
                [action.name]: action.payload
            }
        case 'CLEAR_FEEDBACK':
            return initFeedBack;
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
    feedBack
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();