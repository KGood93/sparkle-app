//fetches and displays an already existing entry

import React from 'react'
import {Link} from 'react-router-dom'
import './Entry.css'
import Quote from '../Quote/Quote'

class Entry extends React.Component {
    render() {
        //console.log(this.props.title) 
        return (
            <div className='entry'>
                <div className="home">
                    <Link to='/journal'>Home</Link>
                </div>
                <div className="name">
                    <label htmlFor="EntryName" className="nameLabel">Title:</label>
                    <input 
                        type="text"
                        className="titleInput"
                        name="entryName"
                        id="entryName"
                        value={this.props.title}
                    />
                </div>
                <Quote 
                    quoteid={this.props.quoteid}
                />
                <div className="entryContent">
                    <textarea 
                        name="entryContent"
                        className="eContent"
                        id="entryContent"
                        value={this.props.content}
                        >
                    </textarea>
                </div>
            </div>
        )
    }
}

export default Entry