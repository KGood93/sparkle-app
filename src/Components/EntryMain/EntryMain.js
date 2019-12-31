import React, {Component} from 'react'
import './EntryMain.css';
import Entry from '../Entry/Entry'
import ApiContext from '../../ApiContext'
import { allEntries } from '../../STORE';

//similar to notePageMain

class EntryMain extends Component {
  static contextType = ApiContext
  
  render() {
    const {entryId} = this.props.match.params
    console.log(entryId)
    const entry = allEntries().entries[entryId - 1]
    //const entry = findEntry(entries, entryId) || {content: ''}
    return (
        <div className='EntryPageMain'>
          <Entry
            title={entry.title}
            content={entry.content}
          />
        </div>
    )
  }
}
export default EntryMain;