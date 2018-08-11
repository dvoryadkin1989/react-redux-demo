import * as types from './types';
import { ApiNames, ApiStereotypes } from './constants';

const ApiActionsFactory = (apiName) => {
    return {
        createRequstAction: (startAction, successAction, failureAction) => (http) => {
            return {
                type: types.API,
                payload: {
                    http: http,
                    startAction: startAction,
                    successAction: successAction,
                    failureAction: failureAction,
                },
            };
        },

        createApiStatusAction: (type, stereotype) => payload => {
            return {
                type: type,
                payload: payload,
                meta: {
                    api: {
                        name: apiName,
                        stereotype: stereotype,
                    },
                },
            };
        }

    }
};

const postsApiActionFactory = ApiActionsFactory(ApiNames.POSTS);

export const fetchingPostsStarted = postsApiActionFactory.createApiStatusAction(types.POSTS_FETCHING_STARTED, ApiStereotypes.API_STARTED);
export const fetchingPostsSucceeded = postsApiActionFactory.createApiStatusAction(types.POSTS_FETCHING_SUCCEEDED, ApiStereotypes.API_SUCCESS);
export const fetchingPostsFailed = postsApiActionFactory.createApiStatusAction(types.POSTS_FETCHING_FAILED, ApiStereotypes.API_FAILURE);
export const fetchPosts = postsApiActionFactory.createRequstAction(fetchingPostsStarted, fetchingPostsSucceeded, fetchingPostsFailed);

const usersApiActionFactory = ApiActionsFactory(ApiNames.USERS);

export const fetchingUsersStarted = usersApiActionFactory.createApiStatusAction(types.USERS_FETCHING_STARTED, ApiStereotypes.API_STARTED);
export const fetchingUsersSucceeded = usersApiActionFactory.createApiStatusAction(types.USERS_FETCHING_SUCCEEDED, ApiStereotypes.API_SUCCESS);
export const fetchingUsersFailed = usersApiActionFactory.createApiStatusAction(types.USERS_FETCHING_FAILED, ApiStereotypes.API_FAILURE);
export const fetchUsers = usersApiActionFactory.createRequstAction(fetchingUsersStarted, fetchingUsersSucceeded, fetchingUsersFailed);

