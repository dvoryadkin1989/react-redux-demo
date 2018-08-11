import * as types from './types';
import {getPostsRequest} from '../../http';

export const fetchPosts = () => {
    return {
        type: types.API,
        payload: {
            http: getPostsRequest,
            startAction: fetchingPostsStarted,
            successAction: fetchingPostsSucceeded,
            failureAction: fetchingPostsFailed,
        },
    };
};

export const fetchingPostsStarted = () => {
    return {
        type: types.POSTS_FETCHING_STARTED,
        meta: {
            apiName: 'posts',
        },
    };
};

export const fetchingPostsSucceeded = (posts) => {
    return {
        type: types.POSTS_FETCHING_SUCCEEDED,
        payload: posts,
        meta: {
            apiName: 'posts',
        },

    };
};

export const fetchingPostsFailed = (error) => {
    return {
        type: types.POSTS_FETCHING_FAILED,
        payload: error,
        meta: {
            apiName: 'posts',
        },

    };
};

export const setPosts = (posts) => {
    return {
        type: types.SET_POSTS,
        payload: posts,
    };
};