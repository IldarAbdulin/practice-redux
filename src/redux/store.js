import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { photosReducer } from './reducers/photos-reducer';
import { todosreducer } from './reducers/todos-reducer';
import { usersReducer } from './reducers/users-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  photos: photosReducer,
  todos: todosreducer,
  users: usersReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
