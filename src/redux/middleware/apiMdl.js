import * as types from '../actions/types';

const defaultApiCall = ({ dispatch }) => next => action => {
    if (action.type !== types.API) {
        next(action);
        return;
    }
    dispatch(action.payload.startAction());
    dispatch(action.payload.successAction());
}

export default [defaultApiCall];