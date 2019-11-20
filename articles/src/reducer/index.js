import { combineReducers } from 'redux';
import { reducer as articlesReducer } from './add';
import { reducer as registerReducer } from './register';
import { reducer as updateReducer } from './update';

export default combineReducers({ articlesReducer, registerReducer, updateReducer }) 
