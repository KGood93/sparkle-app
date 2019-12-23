import React, {Component} from 'react'
import './EntryMain.css';

//similar to notePageMain

class EntryMain extends Component {
  
  render() { 
    return (
      <div className='EntryPageMain'>
        <Entry
          id={note.id}
          name={note.name}
          modified={note.modified}
          onDeleteNote={this.handleDeleteNote}
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