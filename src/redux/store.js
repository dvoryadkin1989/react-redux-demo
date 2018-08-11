import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import postsReducer from './reducers/postsReducer';
import apiReducer from './reducers/apiReducer';

import api from './middleware/apiMdl';

const rootReducer = combineReducers({
    posts: postsReducer,
    api: apiReducer,
});


const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ...api));

export default store;