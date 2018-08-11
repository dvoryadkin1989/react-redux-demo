import * as types from '../actions/types';
import {setPosts} from '../actions/postsActions';

const storePosts = ({dispatch}) => next => action => {
    if (action.type !== types.POSTS_FETCHING_SUCCEEDED) {
        next(action);
        return;
    }

    dispatch(setPosts(action.payload));

};

export default [storePosts];