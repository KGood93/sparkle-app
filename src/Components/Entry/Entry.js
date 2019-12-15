import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext'
import config from '../../config'
import './Entry.css';


class Entry extends Component {
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const entryId = this.props.id
    
    fetch(`${config.API_ENDPOINT}/entry/${entryId}`, {
      method: 'DELETE', 
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if(!res.ok)
          return res.json().then(e => Promise.reject(e))
          return res.json()
      })
      .then(() => {
        this.context.deleteEntry(entryId)
        this.props.onDeleteEntry(entryId)
      })
      .catch(error => {
        console.error({ error })
      })
  }
  
  render() {
    const { name, id, modified } = this.props
    return (
    <div className='entry'>
      <h2 className='entryEven'>
        <Link to={`/entry/${id}`}>
          {name}
        </Link>
      </h2>
      <button className='Note_delete' type='button' onClick={this.handleClickDelete}>
        {' '}
        Delete
      </button>
      <div className='Note_dates'>
        <div className='Note_dates-modified'>
          Modified Date
          {' '}
          <span className='Date'>
            
          </span>
        </div>
      </div>
    </div>
  )
    }
}
export default Entry;