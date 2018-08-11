import * as types from '../actions/types';

const initialState = {};

const postsReducer = (state = initialState, action) => {
    if (action.type === types.SET_USERS) {
        return setUsers(action.payload);
    }
    return state;
};

const setUsers = (posts) => {
    return {
        ...posts,
    };
};

export default postsReducer;