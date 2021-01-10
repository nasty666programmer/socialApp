import {combineReducers} from 'redux';
import postReducer from './postReducer';
import saveReducer from './saveReducer'


const rootReducer = combineReducers({
    posts:postReducer,
    save:saveReducer
})

export default rootReducer;