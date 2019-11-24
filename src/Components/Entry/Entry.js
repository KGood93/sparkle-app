import React, {Component} from 'react';
import EntryForm from '../EntryForm/EntryForm';
import Quote from '../Quote/Quote';
import './Entry.css';


class Entry extends Component {

    render() {
        return (
          <div className="main">
            <nav role="navigation">
              <a href="landing.html" class="homeNav">Home</a>
            </nav>
            <Quote />
            <EntryForm />
          </div>
        )
    }
}
export default Entry;