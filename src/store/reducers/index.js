import likeReducer from './like';
import addReducer from './add';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    likeme : likeReducer,
    addme : addReducer
});

export default allReducers;