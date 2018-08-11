import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers/';
import applicationMdl from './middleware/';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ...applicationMdl));

export default store;