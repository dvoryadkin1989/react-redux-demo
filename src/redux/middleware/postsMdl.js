import * as types from '../actions/types';
import {setPosts} from '../actions/postsActions';

const storePosts = ({dispatch}) => next => action => {
    next(action);
    if (action.type === types.POSTS_FETCHING_SUCCEEDED) {
        dispatch(setPosts(action.payload));
    }
};

export default [storePosts];