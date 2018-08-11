import * as types from '../actions/types';

const initialState = {};

const postsReducer = (state = initialState, action) => {
    if (action.type === types.SET_POSTS) {
        return setPosts(action.payload);
    }
    return state;
};

const setPosts = (posts) => {
    return {
        ...posts,
    };
};

export default postsReducer;