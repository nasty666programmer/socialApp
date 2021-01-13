import SavedPosts from './SavedPosts';
import {connect} from 'react-redux';
import {useState} from 'react';
import '../css/createPosts.css';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
     
function AllPosts({posts}) {
    
    const history = useHistory();
   let arrUser = {
       userName:null,
       text:null,
       id:null
   };
   
   const [usersData,setUsersData] = useState([arrUser])
   usersData.shift()
   
   const deleteSavedPost = (id) => {
    setUsersData(prevState => prevState.filter(el => el.id !== id ? delete  el.id : usersData.push(el)))
    console.log(usersData)
    history.push('/allPosts')
}

    return (
        
        <Router>
        <div style={{position:'relative'}}>
            <nav>
                <Link to='/savedPosts'><span  className='PostNav'>Saved Posts</span></Link>
            </nav>
                <div>           
                {posts.map((post,index) => 
                <div class="card cardSaved" style={{margin:"1rem 1rem",backgroundColor:'#374045'}} onClick={() => {
                    usersData.push({userName:post.userName, text:post.text,id:index})
                    }}>
                <h3>@{post.userName}</h3>
                <h5>{post.firstname}</h5>
                <div class="card-body">
                  <p class="card-text">{post.text}</p>
                </div>
              </div>    
            )}
                </div> 
                <Switch>
                    <Route path='/savedPosts'>
                        <SavedPosts user={usersData} deletePost={deleteSavedPost}/>
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