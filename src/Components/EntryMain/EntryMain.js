//

import React, {Component} from 'react'
import './EntryMain.css';
import Entry from '../Entry/Entry'
import ApiContext from '../../ApiContext'
import {findEntry} from '../../entry-helpers'

class EntryMain extends Component {
  static contextType = ApiContext
  
  render() {
    const {entry=[]} = this.context
    //console.log(entry)
    const {entryId} = this.props.match.params
    //console.log(this.props.match)
    const id = parseInt(entryId)
    const disEntry = findEntry(entry, id) || {title: '', content: '', quoteid: ''}

    //console.log(disEntry.quoteid)

    return (
        <div className='EntryPageMain'>
          <Entry
            title={disEntry.title}
            content={disEntry.content}
            quoteid={disEntry.quoteid}
          />

        </div>
    )
  }
}
export default EntryMain;