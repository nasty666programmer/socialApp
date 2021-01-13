import {useDispatch,useSelector} from 'react-redux';
import { fetchPost } from './reducers/action';
import '../css/savedPost.css';
    
    const RandomPosts = () => {
    const dispatch = useDispatch();  
    const posts = useSelector((state) => {
        return state.posts.fetchedPosts;
    }) 
    return (
        <div>
            <button className='buttonFetch' onClick={() => dispatch(fetchPost())}>Load</button> 
            {posts.map(post => 
                <div key={post.id}>
                <div className="cardSaved card" style={{backgroundColor:'#374045',marginLeft:'1rem',marginTop:'4rem'}}>
                 <h3 style={{color:'#1080d2'}}>{post.title}</h3>
                 <div class="card-body">
                    <p class="card-text"><h5>{post.body}</h5></p>
                 </div>
                </div>
                </div>   
            )}       
        </div>
        
    )
}

export default RandomPosts;