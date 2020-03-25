/*Main Journal page which contains a description of use, Button to add a new entry, and 
a list of all existing journal entries*/

import React from 'react';
import { Link } from 'react-router-dom'
import AddButton from '../AddButton/AddButton.js'
import './Journal.css';
import JournalEntry from '../JournalEntry/JournalEntry'
import ApiContext from '../../ApiContext'

class Journal extends React.Component {
  static contextType = ApiContext;

    constructor(props) {
        super(props);
        this.context = ApiContext
    }

    componentDidMount() {	
      this.context.fetchEntry()	
    }

    render() {
        return (
          <div className="main">
            <div className="discription">
              <p className="descripText">Sparkle is a motivational journaling app 
                to help inspire you to shine. Add a new entry and spend some time 
                reflecting on a motivational quote, or look back on previous entries
                to help spark your dreams and creativity.  
              </p>
            </div>
            <div className="entryButton">
              <AddButton tag={Link} 
                to='/addEntry'
                type='button'
                className='addEntryButton'
              >
                Add Entry
              </AddButton>
            </div>
            <section className="entries">
                <JournalEntry />
            </section>
          </div>
        )
    }
}
export default Journal;