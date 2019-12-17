import React, {Component} from 'react'
import {allEntries} from '../../STORE'
import './JournalEntry.css'

const entries = allEntries().entries
//console.log(entries)

handleClickDelete = e => {
    e.preventDefault()
    const entryId = this.props.id

    console.log('remove clicked')
}

class JournalEntry extends Component {
    render () {
        return (
            entries.map((entryDetail, index) => {
                return (
                    <div className="journalEntry">
                        <h1>{entryDetail.title}</h1>
                        <p>Date Here</p>
                        <button className='journalEntry_delete' type='button' onClick={this.handleClickDelete}>
                            {' '}
                            Remove
                        </button>
                    </div>
                )
            })
        )
    }
}

export default JournalEntry