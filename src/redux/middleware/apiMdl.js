import axios from 'axios';
import * as types from '../actions/types';

const defaultApiCall = ({dispatch}) => next => action => {
    if (action.type !== types.API) {
        next(action);
        return;
    }

    dispatch(action.payload.startAction());

    const {http} = action.payload;
    axios.get(http.url)
        .then(response => dispatch(action.payload.successAction(response.data)))
        .catch(error => dispatch(action.payload.failureAction(error.response)));
};

export default [defaultApiCall];