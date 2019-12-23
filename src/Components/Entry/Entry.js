//fetches and displays an already existing entry//

import React from 'react'
import {format} from 'date-fns'
import './Entry.css'

class Entry extends React.Component {

    handleClickDelete = e => {
        e.preventDefault()
    }
    
    render() {
        const {title, id, modified} = this.props
        return (
            <div className='entry'>
                <h2 className='entryTitle'>
                    /*Link*/
                    {title}
                    /*Link*/
                </h2>
                <button className='deleteEntry' type='button' onClick={this.handleClickDelete}>
                    {' '}
                    Remove
                </button>
                <div className='dates'>
                    Modified
                    {' '}
                    <span className='dateFormat'>
                        {format(modified, 'Do MMM YYYY')}
                    </span>
                </div>
            </div>
        )
    }
}

export default Entry