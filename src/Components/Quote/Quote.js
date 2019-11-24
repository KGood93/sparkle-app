import React, {Component} from 'react';
import './Quote.css';

class Quote extends Component {

    render() {
        return (
            <div className="entryMain">
              <section className="motivQuote">
                <h2>Motivation Quote Prompt</h2>
                <h4 className="quoteBy">Quote Name</h4>
              </section>
            </div>
        )
    }
}
export default Quote;