import React, {Component} from 'react'
import './EntryMain.css';
import Entry from '../Entry/Entry'
import { allEntries } from '../../STORE';

//similar to notePageMain
const entries = allEntries().entries[0]
console.log(entries)

class EntryMain extends Component {
  
  render() { 
    return (
        <div className='EntryPageMain'>
          <Entry
            id={entries.id}
            title={entries.title}
            content={entries.content}
          />
        </div>
    )
  }
}
export default EntryMain;