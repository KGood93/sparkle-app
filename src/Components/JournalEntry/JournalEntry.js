import React, {Component} from 'react'
import {allEntries} from '../../STORE'
import './JournalEntry.css'

const entries = allEntries().entries
//console.log(entries)

class JournalEntry extends Component {
    render () {
        return (
            entries.map((entryDetail, index) => {
                return (
                    <div className="journalEntry">
                        <h1>{entryDetail.title}</h1>
                        <p>Date Here</p>
                    </div>
                )
            })
        )
    }
}

export default JournalEntry