import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import apiReducer from './apiReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    api: apiReducer,
});

export default rootReducer;