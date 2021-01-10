import { SAVED_POST } from "./types"

 const savePost = post => {
    return {
        type: SAVED_POST,
        payload:post
    }
}

export default savePost;