import * as types from './types';
import { getPostsRequest } from '../../http';
import { ApiNames, ApiStereotypes } from './constants';

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
            api: {
                name: ApiNames.POSTS,
                stereotype: ApiStereotypes.API_STARTED,
            },
        },
    };
};

export const fetchingPostsSucceeded = (posts) => {
    return {
        type: types.POSTS_FETCHING_SUCCEEDED,
        payload: posts,
        meta: {
            api: {
                name: ApiNames.POSTS,
                stereotype: ApiStereotypes.API_SUCCESS,
            },
        },

    };
};

export const fetchingPostsFailed = (error) => {
    return {
        type: types.POSTS_FETCHING_FAILED,
        payload: error,
        meta: {
            api: {
                name: ApiNames.POSTS,
                stereotype: ApiStereotypes.API_FAILURE,
            },
        },

    };
};

export const setPosts = (posts) => {
    return {
        type: types.SET_POSTS,
        payload: posts,
    };
};