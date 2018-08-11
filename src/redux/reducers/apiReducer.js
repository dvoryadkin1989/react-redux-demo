import * as statuses from '../../constants/apiStatuses';

const initialState = {
    posts: {
        status: statuses.API_IDLE,
    }
};

const apiReducer = (state = initialState, action) => {
    if (!action.meta || !action.meta.apiName) {
        return state;
    }

    if (action.type.endsWith('FETCHING_STARTED')) {
        return handleFetchingStarted(state, action);
    }
    if (action.type.endsWith('FETCHING_SUCCEEDED')) {
        return handleFetchingSucceeded(state, action);
    }
    if (action.type.endsWith('FETCHING_FAILED')) {
        return handleFetchingFailed(state, action);
    }

    return state;
};

const handleFetchingStarted = (state, action) => {
    const { apiName } = action.meta;

    return {
        ...state,
        [apiName]: {
            status: statuses.API_LOADING,
        }
    };
};

const handleFetchingSucceeded = (state, action) => {
    const { apiName } = action.meta;

    return {
        ...state,
        [apiName]: {
            status: statuses.API_COMPLETED,
        },
    };
};

const handleFetchingFailed = (state, action) => {
    const { apiName } = action.meta;

    return {
        ...state,
        [apiName]: {
            status: statuses.API_ERROR,
            error: action.payload,
        },
    };
};

export default apiReducer;