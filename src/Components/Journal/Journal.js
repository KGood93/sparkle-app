import React from 'react';
import { Link } from 'react-router-dom'
import AddButton from '../AddButton/AddButton.js'
import Entry from '../Entry/Entry'
import './Journal.css';
import JournalEntry from '../JournalEntry/JournalEntry'


class Journal extends React.Component {

    render() {
        return (
          <div className="main"> 
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