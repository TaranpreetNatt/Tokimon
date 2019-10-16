import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Tokimon from './components/tokimon';
import AddTokimon from './components/addtokimon';
import UpdateTokimon from './components/updateTokimon';
import TokimonInfo from './components/tokimonInfo';
import NotFound from './components/notfound';
import './App.css';

class App extends Component {
  render() { 
    return (
      <div className="content">
        <Switch>
          <Route path='/updatetokimon/:id' component={UpdateTokimon}/>
          <Route path='/tokimoninfo/:id' component={TokimonInfo}/>
          <Route path='/addtokimon' component={AddTokimon}/>
          <Route path='/not-found' component={NotFound}/>
          <Route path='/' exact component={Tokimon}/>
          <Redirect to='/not-found'/>
        </Switch>
      </div>

    );
  }
}
 
export default App;
