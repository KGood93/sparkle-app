import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Journal from './Components/Journal/Journal'
import Header from './Components/Header/Header'
//import PrivateRoute from './Components/Utils/PrivateRoute'
//import PublicOnlyRoute from './Components/Utils/PublicOnlyRoute'
//import Login from './Components/Login/Login'
//import Registration from './Components/Registration/Registration'
import './App.css'
import AddEntry from './Components/AddEntry/AddEntry'
import EntryMain from './Components/EntryMain/EntryMain'
import config from './config'
import ApiContext from './ApiContext'
//import TokenService from './services/token-service'
import JournalApiService from './services/journal-api-service'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      journal: [],
      entry: [],
      quotes: [],
    };
    this.fetchEntry = this.fetchEntry.bind(this)
  }

  componentDidMount() {
    this.fetchEntry();
    this.fetchQuote();
    //const journalUrl = `${config.API_ENDPOINT}/journal/1`;
    //const options = {
    //  method: 'GET',
    //  headers: {
    //    'Content-Type': 'application/json',
    //    'authorization': `bearer ${TokenService.getAuthToken()}`
    //  }
    //};

    //fetch(journalUrl, options)
    //  .then(res => {
    //    if(res.ok) {
    //      return res.json()
    //    }
    //    else {
     //     throw new Error('Something went wrong loading journal')
    //    }
    //  })
    //  .then(data => {
    //    this.setState({journal: data})
        //console.log(data)
    //  })
    //  .catch(err => {
    //    this.setState({
    //      error: err.message
    //    })
    //  })

    //JournalApiService.getEntry()
    //console.log(JournalApiService.getEntry())
    //this.setState({entry: JournalApiService.getEntry()})
    //const entries = JournalApiService.getEntry()
    //console.log(entries)
    //this.setState({entry: entries})
    JournalApiService.getJournal(2)
    
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
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  fetchQuote() {
    const quoteUrl = `${config.API_ENDPOINT}/quote`

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
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  handleDeleteEntry = id => {
    this.fetchEntry()
  };

  renderNavRoutes() {
    return (
      <>
        {['/', '/journal'].map(path => {
          return(
          <Route 
            exact
            key={path}
            path={path}
            component={Journal}
          />
        )})}
        <Route path='/addEntry' component={AddEntry} />
        <Route path='/entry/:entryId' component={EntryMain}/>

      </>
    );
  }
  render() {
    const value = {
      entry: this.state.entry,
      quotes: this.state.quotes,
      deleteEntry: this.handleDeleteEntry,
      addEntry: this.handleDeleteEntry,
      fetchEntry: this.fetchEntry
    }

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
