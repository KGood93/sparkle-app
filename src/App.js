import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Journal from './Journal/Journal'
import Entry from './Entry/Entry'
import './App.css'

class App extends Component {
  renderNavRoutes() {
    return (
      <>
        {['/'].map(path => (
          <Route 
              exact
              key={path}
              path={path}
              Component={Journal}
          />
        ))}
        <Route path="/journal" component={Journal} />
        <Route path="/entry" component={Entry}/>
      </>
    );
  }
  
  render() {
    return (
    <div className="App">
      <header role="banner" className="mainHeader">
        <h1>MotiveKate</h1>
        <a href="login.html" className="log">Logout</a>
      </header>

      <Entry />

      <footer role="content-info">
        <a href="index.html">Index</a>
      </footer>
    </div>
    );
  }

}

export default App;
