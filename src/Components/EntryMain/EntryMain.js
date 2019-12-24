import React, {Component} from 'react'
import './EntryMain.css';
import Entry from '../Entry/Entry'
import { allEntries } from '../../STORE';

//similar to notePageMain
const entries = allEntries().entries

class EntryMain extends Component {
  
  render() { 
    return (
      entries.map((entry, index) => {
        return (
          <div className='EntryPageMain'>
          <Entry
            id={entry.id}
            name={entry.title}
          />
          <div className='EntryMain'>
            {entry.content.split(/\n \r|\n/).map((para, i) =>
              <p key={i}>{para}</p>
            )}
          </div>
        </div>
        )
      })

    )
  }
}
export default EntryMain;