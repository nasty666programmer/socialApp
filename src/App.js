import './css/App.css';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import CreatePosts from './component/CreatePosts';
import AllPosts from './component/AllPosts';
import React from 'react';
import { render } from 'react-dom';
import RandomPosts from './component/RandomPosts';
import thunk from 'redux-thunk';

class App extends React.Component {

  render(){
  return (
    <Router>
    <div className='headCont'>
        <nav >
          <Link to='/createPosts'><span className='PostNav'>Create the post</span></Link>
          <Link to='/allPosts'><span className='PostNav'>All Posts</span></Link>
          <Link to='/randomPosts'><span className='PostNav'>Random Posts</span></Link>
          </nav>
  
        <Switch>
      <Route path='/createPosts'>
          <CreatePosts/>
      </Route>
      <Route path='/allPosts'>
        <AllPosts/>
      </Route>
      <Route path='/randomPosts'>
        <RandomPosts/>
      </Route>
    </Switch>
    </div>
    
    </Router>
  );
  }
}

export default App;
