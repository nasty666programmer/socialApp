import {CREATE_POST,FETCH_POST} from './types';


const initialState = {
    posts:[],
    fetchedPosts:[]
}

const postReducer = (state=initialState,action) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state,posts:state.posts.concat([action.payload])}
            break;
            case FETCH_POST:
                return {...state,fetchedPosts:action.payload}
                break;
        default:return state
    }
}

export default postReducer;