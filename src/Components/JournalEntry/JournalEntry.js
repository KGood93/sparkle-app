import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {allEntries} from '../../STORE'
import './JournalEntry.css'

const entries = allEntries().entries
//console.log(entries)

class JournalEntry extends Component {
    handleClickDelete = e => {
        e.preventDefault()
        const entryId = this.props.id
    
        console.log(`remove `)
    }
    
    render () {
        return (
            entries.map((entryDetail, index) => {
                return (
                    <div className="journalEntry">
                        <h1>
                            <Link to='/entry'>
                                {entryDetail.title}
                            </Link>
                        </h1>
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