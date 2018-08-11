import * as types from './types';

export const setUsers = (users) => {
    return {
        type: types.SET_USERS,
        payload: users,
    };
};