import * as types from './types';

export const setPosts = (posts) => {
    return {
        type: types.SET_POSTS,
        payload: posts,
    };
};