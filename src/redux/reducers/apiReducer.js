import * as statuses from '../../constants/apiStatuses';
import { apiStereotypes } from '../actions/constants';

const initialState = {
    posts: {
        status: statuses.API_IDLE,
    }
};

const apiReducer = (state = initialState, action) => {
    if (!action.meta || !action.meta.api) {
        return state;
    }

    const {name, stereotype} = action.meta.api;

    if (stereotype === apiStereotypes.API_STARTED) {
        return handleFetchingStarted(name, state, action);
    }
    if (stereotype === apiStereotypes.API_SUCCESS) {
        return handleFetchingSucceeded(name, state, action);
    }
    if (stereotype === apiStereotypes.API_ERROR) {
        return handleFetchingFailed(name, state, action);
    }

    return state;
};

const handleFetchingStarted = (apiName, state, action) => {
    return {
        ...state,
        [apiName]: {
            status: statuses.API_LOADING,
        }
    };
};

const handleFetchingSucceeded = (apiName, state, action) => {
    return {
        ...state,
        [apiName]: {
            status: statuses.API_COMPLETED,
        },
    };
};

const handleFetchingFailed = (apiName, state, action) => {
    return {
        ...state,
        [apiName]: {
            status: statuses.API_ERROR,
            error: action.payload,
        },
    };
};

export default apiReducer;