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
import ApiContext from './ApiContext'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      journal: [],
      entry: [],
      quotes: [],
    };
  }

  componentDidMount() {
    this.fetchEntry();
    this.fetchQuote();
    const journalUrl = `${config.API_ENDPOINT}/journal/100`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(journalUrl, options)
      .then(res => {
        if(res.ok) {
          return res.json()
        }
        else {
          throw new Error('Something went wrong loading journal')
        }
      })
      .then(data => {
        this.setState({journal: data})
        //console.log(data)
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
    
  }

  fetchEntry() {
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
          return res.json()
          //logic to set nextQuoteId
        }
        else{
          throw new Error('Something went wrong loading entries')
        }
      })
      .then(data => {
        this.setState({entry: data})
        //console.log(data)
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  fetchQuote() {
    const quoteUrl = `${config.API_ENDPOINT}/quote`
    //Still need to write server endpoint
    const quoteOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(quoteUrl, quoteOptions)
      .then(res => {
        if(res.ok) {
          return res.json()
        }
        else{
          throw new Error('Something went wrong loading quotes')
        }
      })
      .then(data => {
        this.setState({quotes: data})
        //console.log(data)
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
    const value = {
      entry: this.state.entry,
      quotes: this.state.quotes,
      //newQuoteId: this.state.newQuoteId
    }

    //console.log(value.newQuoteId)
    //const nextQuoteId = this.getNewQuoteId(value.entry)
    //console.log(nextQuoteId)
    //value.newQuoteId = nextQuoteId
    //console.log(value.newQuoteId)

    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <header className="mainHeader">
            <Header />
          </header>
          <nav className="AppNav">{this.renderNavRoutes()}</nav>

          <footer>
            <p>Important Info</p>
          </footer>
        </div>
      </ApiContext.Provider>

    );
  }

}

export default App;
