import React, {Component} from 'react'
import './EntryMain.css';
import Entry from '../Entry/Entry'

//similar to notePageMain

class EntryMain extends Component {
  
  render() { 
    return (
      <div className='EntryPageMain'>
        <Entry
          id={note.id}
          name={note.name}
          modified={note.modified}
        />
        <div className='EntryMain'>
          {note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </div>
    )
  }
}
export default EntryMain;