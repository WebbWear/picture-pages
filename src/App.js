import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

// import Nav from '.Nav'
import CategoryList from './Components/CategoryList'
import PhotoDetail from './Components/PhotoDetail'
import PhotoList from './Components/PhotoList'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Panda Pages</h1>
            <h3 className="">Created by Jeff Webb</h3>
          </header>
            <Switch>
              <Route path="/" exact component={CategoryList}/>
              <Route path="/PhotoDetail" exact component={PhotoDetail}/>
              <Route path="/PhotoList" exact component={PhotoList}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
