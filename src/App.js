import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Journal from './Components/Journal/Journal'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration'
import './App.css'
import AddEntry from './Components/AddEntry/AddEntry'
import EntryMain from './Components/EntryMain/EntryMain'
import config from './config'

class App extends Component {
  static defaultProps = {
    store: {
      allEntires: {}
    }
  };

  componentDidMount() {
    const entryUrl = `${config.API_ENDPOINT}/entry`
    const entryOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(entryUrl, entryOptions)
      .then(res => {
        if(res.ok) {
          console.log(res.json())
          return res.json()
        }
        else {
          throw new Error('Unable to fetch entries')
        }
      })
      .then(data => {
        this.setState({entry: data})
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

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
        <Route path='/entry/:entryId' component={EntryMain}/>
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
