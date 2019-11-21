import React, {Component} from 'react';
import './Entry.css';

class Entry extends Component {

    render() {
        return (
          <div className="main">
            <nav role="navigation">
              <a href="landing.html" class="homeNav">Home</a>
            </nav>
            <div className="entryMain">
              <section className="motivQuote">
                <h2>Motivation Quote Prompt</h2>
                <h4 className="quoteBy">Quote Name</h4>
              </section>
      
              <section>
                <textarea></textarea>
              </section>
            </div>
      
            <div className="entryButtons">
              <section className="buttons">
                  <button type="button" className="clear">Clear Entry</button>
                  <button type="button" className="edit">Edit Entry</button>
                  <button type="button" className="save">Save Entry</button>
              </section>
            </div>
          </div>
        )
    }
}
export default Entry;