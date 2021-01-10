import {SAVED_POST} from './types';

const initialState = {
    save:[],
    
}

const saveReducer = (state=initialState,actionSave) => {
    switch (actionSave.type) {
        case SAVED_POST:
            return {...state,save:state.save.concat([actionSave.payload])}
            break;
        default:return state
    }
}

export default saveReducer;