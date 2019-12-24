//fetches and displays an already existing entry//

import React from 'react'
import {format} from 'date-fns'
import './Entry.css'
import { allEntries } from '../../STORE'

const entry = allEntries().entries

class Entry extends React.Component {

    handleClickDelete = e => {
        e.preventDefault()
    }
    
    render() {
        const {title, id, modified} = this.props
        return (
            <div className='entry'>
                <h2 className='entryTitle'>
                    {title}
                </h2>
                <button className='deleteEntry' type='button' onClick={this.handleClickDelete}>
                    {' '}
                    Remove
                </button>

            </div>
        )
    }
}

export default Entry