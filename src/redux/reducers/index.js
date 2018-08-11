import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import apiReducer from './apiReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    api: apiReducer,
});

export default rootReducer;