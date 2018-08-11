import * as types from './types';
import { getUsersRequest } from '../../http';
import { ApiNames, ApiStereotypes } from './constants';

export const fetchUsers = () => {
    return {
        type: types.API,
        payload: {
            http: getUsersRequest,
            startAction: fetchingUsersStarted,
            successAction: fetchingUsersSucceeded,
            failureAction: fetchingUsersFailed,
        },
    };
};

export const fetchingUsersStarted = () => {
    return {
        type: types.USERS_FETCHING_STARTED,
        meta: {
            api: {
                name: ApiNames.USERS,
                stereotype: ApiStereotypes.API_STARTED,
            },
        },
    };
};

export const fetchingUsersSucceeded = (posts) => {
    return {
        type: types.USERS_FETCHING_SUCCEEDED,
        payload: posts,
        meta: {
            api: {
                name: ApiNames.USERS,
                stereotype: ApiStereotypes.API_SUCCESS,
            },
        },

    };
};

export const fetchingUsersFailed = (error) => {
    return {
        type: types.USERS_FETCHING_FAILED,
        payload: error,
        meta: {
            api: {
                name: ApiNames.USERS,
                stereotype: ApiStereotypes.API_FAILURE,
            },
        },

    };
};

export const setUsers = (users) => {
    return {
        type: types.SET_USERS,
        payload: users,
    };
};