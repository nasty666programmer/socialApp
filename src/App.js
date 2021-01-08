import './css/App.css';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import CreatePosts from './component/CreatePosts';
import AllPosts from './component/AllPosts';
import React from 'react';
import { render } from 'react-dom';
import SavedPosts from './component/SavedPosts';

class App extends React.Component {

   updateValue(value) {
    console.log(value)
  }
  render(){
  return (
    <Router>
    <div>
        <nav>
          <Link to='/createPosts'><span className='PostNav'>Create the post</span></Link>
          <Link to='/allPosts'><span className='PostNav'>All Posts</span></Link>
          <Link to='/savedPosts'><span className='PostNav'>Saved Posts</span></Link>
          </nav>
  
        <Switch>
      <Route path='/createPosts'>
          <CreatePosts/>
      </Route>
      <Route path='/allPosts'>
        <AllPosts/>
      </Route>
      <Route path='/savedPosts'>
        <SavedPosts/>
      </Route>
    </Switch>
    </div>
    
    </Router>
  );
  }
}

export default App;
