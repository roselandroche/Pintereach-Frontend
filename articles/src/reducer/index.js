import { combineReducers } from 'redux';
import { reducer as articlesReducer } from './articles';
import { reducer as registerReducer } from './register';

export default combineReducers({ articlesReducer, registerReducer }) 
