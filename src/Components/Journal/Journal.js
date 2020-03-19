import React from 'react';
import { Link } from 'react-router-dom'
import AddButton from '../AddButton/AddButton.js'
//import Entry from '../Entry/Entry'
import './Journal.css';
import JournalEntry from '../JournalEntry/JournalEntry'
//import EntryMain from '../EntryMain/EntryMain'
import ApiContext from '../../ApiContext'


class Journal extends React.Component {
  static contextType = ApiContext;

  componentDidMount() {
    this.context.fetchEntry()
  }

    render() {
        return (
          <div className="main">
          <div className="disription">
            <p className="descripText">Sparkle is a motivational journaling app to help inspire
               you to lead your best live. Add a new entry or look 
               back on previous entries to help spark your dreams and 
               creativity. </p>
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