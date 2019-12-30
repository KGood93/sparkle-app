import React, {Component} from 'react'
import './EntryMain.css';
import Entry from '../Entry/Entry'
import ApiContext from '../../ApiContext'
import { allEntries } from '../../STORE';
import {findEntry} from '../../entry-helpers'

//similar to notePageMain
//const entries = allEntries().entries[1]
//console.log(entries)

//need to set context

class EntryMain extends Component {
  static contextType = ApiContext
  
  render() {
    const {entries=[]} = this.context 
    const {entryId} = this.props.match.params
    console.log(entryId)
    const entry = findEntry(entries, entryId) || {content: ''}
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