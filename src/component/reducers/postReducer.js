import {CREATE_POST} from './types';


const initialState = {
    posts:[],
    
}

const postReducer = (state=initialState,action) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state,posts:state.posts.concat([action.payload])}
            break;
        default:return state
    }
}

export default postReducer;