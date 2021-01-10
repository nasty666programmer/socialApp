import {connect} from 'react-redux';
import '../css/createPosts.css'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import AllPosts from './AllPosts';
import CreatePosts from './CreatePosts';
import {useHistory} from 'react-router-dom';


function SavedPosts(props) {
    const history=useHistory();
   const {user} = props;

    return (
        
        <div className='cont'>
            <div className='wrapper'>
            <img onClick={() => history.push('/allPosts')} src="https://img.icons8.com/metro/26/000000/exit.png"/>
            {user.map(data => 
                <div>
                <div className=" cardSaved card">
                
                 <h3>{data.userName}</h3>
                 <div class="card-body">
                    <p class="card-text">{data.text}</p>
                 </div>
                </div>
                </div>
            )}
            </div>
         
        </div>        
    )   
}





export default SavedPosts;