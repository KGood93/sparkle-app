import React, {Component} from 'react'
import {allEntries} from '../../STORE'

const entries = allEntries().entries
console.log(entries)

class JournalEntry extends Component {
    render () {
        return (
            entries.map((entryDetail, index) => {
                return (
                    <div>
                        <h1>{entryDetail.title}</h1>
                    </div>
                )
            })
        )
    }
}

export default JournalEntry