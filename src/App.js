import React ,{ Component } from 'react';
import Navbar from './component/Navbar'
import { BrowserRouter , Route ,Switch} from 'react-router-dom';
import Home from './component/Home'

import About from './component/About'
import Post from './component/post'

class App extends Component{


render(){


  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path='/home' component={Home} />
      <Route path='/about' component={About} />

      <Route path="/:post_id" component={Post} />
      </Switch>
     

    </div>
    </BrowserRouter>
   

  );
}
}

export default App;
