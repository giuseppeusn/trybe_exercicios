import { createStore } from 'redux';
import { combineReducers } from 'redux';
import TrafficSignalReducer from './TrafficSignalReducer';
import CarsReducer from './CarsReducer';

const rootReducer = combineReducers({ TrafficSignalReducer, CarsReducer })

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

