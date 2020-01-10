import React, {Component} from 'react'
import './EntryMain.css';
import Entry from '../Entry/Entry'
import ApiContext from '../../ApiContext'
import {findEntry} from '../../entry-helpers'

//similar to notePageMain

class EntryMain extends Component {
  static contextType = ApiContext
  
  render() {
    const {entry=[]} = this.context
    console.log(entry)
    const {entryId} = this.props.match.params
    const id = parseInt(entryId)
    const disEntry = findEntry(entry, id) || {title: '', content: '', quoteid: ''}

    console.log(disEntry.quoteid)

    return (
        <div className='EntryPageMain'>
          <Entry
            title={disEntry.title}
            content={disEntry.content}
          />

        </div>
    )
  }
}
export default EntryMain;