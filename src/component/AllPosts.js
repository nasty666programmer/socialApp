import SavedPosts from './SavedPosts';
import {connect} from 'react-redux';
import {useState} from 'react';
import '../css/createPosts.css';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';

     
function AllPosts({posts},props) {
    const [flag,setFlag] = useState(false);
   let arrUser = [{
       userName:null,
       text:null
   }];
   arrUser.shift()
    return (
        
        <Router>
        <div>
            <nav>
                <Link to='/savedPosts'><span className='PostNav'>Saved Posts</span></Link>
            </nav>
                <div>           
                {posts.map(post => 
                <div class="card" style={{width: "18rem"}}>
                <h3>@{post.userName}</h3>
                <h5>{post.firstname}</h5>
                <div class="card-body">
                  <p class="card-text">{post.text}</p>
                </div>
                <img   onClick={() => {

                    arrUser.push({userName:post.userName, text:post.text})
                    console.log(arrUser)
                    }} className='likes likes_btn' style={{width:'3rem',marginLeft:'30%'}} src="data:image/jpeg;base64,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"/>
               
              </div>    
                )}
                </div> 
                <Switch>
                    <Route path='/savedPosts'>
                        <SavedPosts  user={arrUser}/>
                    </Route>
                </Switch>
        </div>
        </Router>
    )
}

const mapStateToProps = state => {
    
    return {
        posts: state.posts.posts
    }
}



export default connect(mapStateToProps,null)(AllPosts);