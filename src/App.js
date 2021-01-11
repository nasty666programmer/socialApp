import './css/App.css';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import CreatePosts from './component/CreatePosts';
import AllPosts from './component/AllPosts';
import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {

   updateValue(value) {
    console.log(value)
  }
  render(){
  return (
    <Router>
    <div className='headCont'>
        <nav >
          <Link to='/createPosts'><span className='PostNav'>Create the post</span></Link>
          <Link to='/allPosts'><span className='PostNav'>All Posts</span></Link>
          </nav>
  
        <Switch>
      <Route path='/createPosts'>
          <CreatePosts/>
      </Route>
      <Route path='/allPosts'>
        <AllPosts/>
      </Route>
    </Switch>
    </div>
    
    </Router>
  );
  }
}

export default App;
