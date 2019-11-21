import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Journal from './Components/Journal/Journal'
import Entry from './Components/Entry/Entry'
import Header from './Components/Header/Header'
import './App.css'

class App extends Component {
  
  render() {
    return (
    <div className="App">
      <header className="mainHeader">
        <Header />
      </header>
      
      <Entry />

      <footer role="content-info">
        <p>Important Info</p>
      </footer>
    </div>
    );
  }

}

export default App;
