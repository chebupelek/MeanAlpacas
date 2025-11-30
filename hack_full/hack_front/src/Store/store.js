import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';

import manReducer from '../Reducers/ManReducer';

let reducers = combineReducers({
    man: manReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;