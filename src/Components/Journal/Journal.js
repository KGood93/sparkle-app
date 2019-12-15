import React from 'react';
import { Link } from 'react-router-dom'
import AddButton from '../AddButton/AddButton.js'
import Entry from '../Entry/Entry'
import './Journal.css';


class Journal extends React.Component {

    render() {
        return (
          <div className="main"> 
          <div class="entryButton">
            <AddButton tag={Link} 
                to='/addEntry'
                type='button'
                className='addEntryButton'
            >
                Add Entry
            </AddButton>
          </div>
            <section className="entries">
                <Entry />
            </section>
          </div>
        )
    }
}
export default Journal;