import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Journal from './Components/Journal/Journal'
import Entry from './Components/Entry/Entry'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration'
import './App.css'

class App extends Component {
  
  render() {
    return (
      <ApiContext.Provider>
        <div className="App">
          <header className="mainHeader">
            <Header />
          </header>
      
      
          <Entry />


          <footer role="content-info">
            <p>Important Info</p>
          </footer>
        </div>
      </ApiContext.Provider>
    );
  }

}

export default App;
