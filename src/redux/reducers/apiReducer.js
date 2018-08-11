import { ApiStatuses } from '../../constants/ApiStatuses';
import { ApiStereotypes } from '../actions/constants';

const initialState = {
    posts: {
        status: ApiStatuses.IDLE,
    }
};

const apiReducer = (state = initialState, action) => {
    if (!action.meta || !action.meta.api) {
        return state;
    }

    const {name, stereotype} = action.meta.api;

    if (stereotype === ApiStereotypes.API_STARTED) {
        return handleFetchingStarted(name, state, action);
    }
    if (stereotype === ApiStereotypes.API_SUCCESS) {
        return handleFetchingSucceeded(name, state, action);
    }
    if (stereotype === ApiStereotypes.API_ERROR) {
        return handleFetchingFailed(name, state, action);
    }

    return state;
};

const handleFetchingStarted = (apiName, state, action) => {
    return {
        ...state,
        [apiName]: {
            status: ApiStatuses.LOADING,
        }
    };
};

const handleFetchingSucceeded = (apiName, state, action) => {
    return {
        ...state,
        [apiName]: {
            status: ApiStatuses.COMPLETED,
        },
    };
};

const handleFetchingFailed = (apiName, state, action) => {
    return {
        ...state,
        [apiName]: {
            status: ApiStatuses.ERROR,
            error: action.payload,
        },
    };
};

export default apiReducer;