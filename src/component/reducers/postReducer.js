import {CREATE_POST} from './types';
import {SAVED_POST} from './types';

const initialState = {
    posts:[],
    saved:[]
}

const postReducer = (state=initialState,action) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state,posts:state.posts.concat([action.payload])}
            break;
            case SAVED_POST:
                return {...state,saved:state.saved.concat([action.payload])}
                break;
    
        default:return state
    }
}

export default postReducer;