import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
    routing,
    fullGame: gameReducer,
});

export default rootReducer;