import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import WelcomePage from './welcomeComponent';
import HomeComponent from './homeComponent';

import './styles/backdrop.css';

class App extends React.Component {
    

    render(){
      return(
        <Router>
        <div>
          <Route path="/" exact component={WelcomePage}/>
          <Route path="/welcome" exact component={WelcomePage}/>
          <Route path="/home" component={HomeComponent}/>
          
        </div>
        </Router>
      )
    }
}
export default App;