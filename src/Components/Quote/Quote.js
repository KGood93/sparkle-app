import React, {Component} from 'react';
import './Quote.css';
import {findQuote} from '../../entry-helpers'
import ApiContext from '../../ApiContext'

class Quote extends Component {
    static contextType = ApiContext

    render() {
      const {quotes = []} = this.context
      //console.log(quotes)
      const quoteid = this.props.quoteid
      console.log(quoteid)
      const quoteId = parseInt(quoteid)
      //console.log(quoteId)
      const disQuote = findQuote(quotes, quoteId) || {quote: '', author: '', used: ''}
      console.log(disQuote)
        return (
            <div className="entryMain">
              <section className="motivQuote">
                <h2>{disQuote.quote}</h2>
                <h4 className="quoteBy">{disQuote.author}</h4>
              </section>
            </div>
        )
    }
}
export default Quote;