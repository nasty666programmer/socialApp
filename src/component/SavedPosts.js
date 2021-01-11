import {connect} from 'react-redux';
import '../css/createPosts.css'
import AllPosts from './AllPosts';
import CreatePosts from './CreatePosts';
import {useHistory} from 'react-router-dom';
import '../css/savedPost.css';


function SavedPosts(props) {
    const history=useHistory();
   const {user} = props;

    return (
        
        <div className='cont'>
            <div className='wrapper'>
            <img onClick={() => history.push('/allPosts')} src="https://img.icons8.com/metro/26/000000/exit.png" style={{position:'absolute'}} />
            {user.map(data => 
                <div>
                <div className="cardSaved card" style={{backgroundColor:'#374045',marginLeft:'1rem',marginTop:'2rem'}}>
                 <h3>@{data.userName}</h3>
                 <div class="card-body">
                    <p class="card-text"><h5>{data.text}</h5></p>
                 </div>
                </div>
                </div>
            )}
            </div>
         
        </div>        
    )   
}





export default SavedPosts;