import React, {Component} from 'react';
import './EntryForm.css';

class EntryForm extends Component {

    render() {
        return (
          <div className="main">
            <section>
                <textarea></textarea>
            </section>
      
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
export default EntryForm;