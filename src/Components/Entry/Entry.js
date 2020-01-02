//fetches and displays an already existing entry

import React from 'react'
import {Link} from 'react-router-dom'
import {format} from 'date-fns'
import './Entry.css'
import { allEntries } from '../../STORE'
import Quote from '../Quote/Quote'

class Entry extends React.Component {

    handleClickDelete = e => {
        e.preventDefault()
    }
    
    render() {
        console.log(this.props.title) 
        return (
            <div className='entry'>
                <div className="home">
                    <Link to='/journal'>Home</Link>
                </div>
                <div className="name">
                    <label htmlFor="EntryName" className="nameLabel">Name:</label>
                    <input 
                        type="text"
                        className="Entry_control"
                        name="entryName"
                        id="entryName"
                        value={this.props.title}
                    />
                </div>
                <Quote />
                <div className="entryContent">
                    <textarea 
                        name="entryContent"
                        id="entryContent"
                        value={this.props.content}
                        >
                    </textarea>
                </div>
                <button className='deleteEntry' type='button'>
                    {' '}
                    Remove
                </button>
            </div>
        )
    }
}

export default Entry