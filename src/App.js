import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Journal from './Components/Journal/Journal'
import Entry from './Components/Entry/Entry'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration'
import './App.css'
import AddEntry from './Components/AddEntry/AddEntry'

class App extends Component {
  static defaultProps = {
    store: {
      allEntires: {}
    }
  };

  renderNavRoutes() {
    return (
      <>
        {['/', '/journal'].map(path => (
          <Route 
            exact
            key={path}
            path={path}
            component={Journal}
          />
        ))}
        <Route path='/login' component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='/addEntry' component={AddEntry} />
      </>
    );
  }
  render() {
    return (
        <div className="App">
          <header className="mainHeader">
            <Header />
          </header>
          <nav className="AppNav">{this.renderNavRoutes()}</nav>

          <footer>
            <p>Important Info</p>
          </footer>
        </div>

    );
  }

}

export default App;
