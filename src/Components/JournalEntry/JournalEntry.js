import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './JournalEntry.css'
import ApiContext from '../../ApiContext'
import config from '../../config'
//import TokenService from '../../services/token-service'

class JournalEntry extends Component {
    static contextType = ApiContext

    deleteEntry = e => {
        e.preventDefault()
        const entryid = e.target.id
        console.log(entryid)

        //this.props.history.push(`/`)

        fetch(`${config.API_ENDPOINT}/entry/${entryid}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                console.log(res)
                if(!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then((myJson) => {
                if(!myJson.ok) {
                    Promise.reject(e)
                }
            })
            .then(() => {
               this.context.deleteEntry(entryid)
            })
            .catch(error => {
                console.error({error})
            })
     
    }
    
    render () {
        const {entry=[]} = this.context
        const entries = entry
        //console.log(entries)
        return (
            entries.map((entryDetail, index) => {
                //console.log(entryDetail)
                return (
                    <div className="journalEntry" key={index}>
                        <h1>
                            <Link to={`/entry/${entryDetail.entryid}`}>
                                {entryDetail.title}
                            </Link>
                        </h1>
                        <p>{entryDetail.date}</p>
                        <button className='journalEntry_delete' type='button' id={entryDetail.entryid} onClick={this.deleteEntry}>
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