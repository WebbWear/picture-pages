import React, { Component } from 'react';
import './App.css';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './Components/Nav'
import CategoryList from './Components/CategoryList'
import PhotoDetail from './Components/PhotoDetail'
import PhotoList from './Components/PhotoList'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          <Nav/>
          </header>
          <section className="body">
            <Switch>
              <Route path="/CategoryList" exact component={CategoryList}/>
              <Route path="/PhotoDetail" exact component={PhotoDetail}/>
              <Route path="/PhotoList" exact component={PhotoList}/>
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
