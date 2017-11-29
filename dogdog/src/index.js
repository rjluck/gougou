import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// store
import {createStore} from 'redux';
import reducers from '../src/reducers/index'
import {Provider} from 'react-redux';

// 
import thunk from 'redux-thunk'; //处理异步action 
import reduxpromsie from "redux-promise";
import {applyMiddleware} from "redux";


const store = createStore(reducers,applyMiddleware(thunk));

function renderpage(){
	ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
}
renderpage();

store.subscribe(renderpage)

registerServiceWorker();
 