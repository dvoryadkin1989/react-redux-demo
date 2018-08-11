import * as types from '../actions/types';
import {setUsers} from '../actions/usersActions';

const storeUsers = ({dispatch}) => next => action => {
    next(action);
    if (action.type === types.POSTS_FETCHING_SUCCEEDED) {
        dispatch(setUsers(action.payload));
    }
};

export default [storeUsers];