import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reduceruser } from './reducer/reducer';
import { error_reducer } from './reducer/errorReducer';
import projectReducer from './reducer/projectReducer';
import {thunk} from 'redux-thunk'

const rootReducer = combineReducers({
  users: reduceruser, 
  errors: error_reducer,
  projects: projectReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store; // Exportez votre store par défaut
