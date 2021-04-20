import { combineReducers } from 'redux';
import undoable from 'redux-undo';

import appReducer from './app/app-store';

export default combineReducers({
    app: undoable(appReducer)
});