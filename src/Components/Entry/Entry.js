//fetches and displays an already existing entry//

import React from 'react'
import {format} from 'date-fns'
import './Entry.css'
import { allEntries } from '../../STORE'

class Entry extends React.Component {

    handleClickDelete = e => {
        e.preventDefault()
    }
    
    render() {
        console.log(this.props.title) 
        return (
            <div className='entry'>
                <h2 className='entryTitle'>
                    {this.props.title}
                </h2>
                <p>
                    {this.props.content}
                </p>
                <button className='deleteEntry' type='button' onClick={this.handleClickDelete}>
                    {' '}
                    Remove
                </button>

            </div>
        )
    }
}

export default Entry