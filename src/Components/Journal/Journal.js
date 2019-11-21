import React from 'react';
//import AddButton from '../AddButton/AddButton.js'
import './Journal.css';

class Journal extends React.Component {

    render() {
        return (
          <div className="main"> 
          <div class="entryButton">
            <button type="button" class="addEntry">Add Entry</button>
          </div>
            <section className="entries">
                <div className="entryOdd">
                    <h3 className="entryName">Entry Title 1</h3>
                    <h4 className="entryDate">Date</h4>
                    <button type="button" className="Open">Open</button>
                    <button type="button" className="Delete">Delete</button>
                </div>
                <div className="entryEven">
                    <h3 className="entryName">Entry Title 2</h3>
                    <h4 className="entryDate">Date</h4>
                    <button type="button" className="Open">Open</button>
                    <button type="button" className="Delete">Delete</button>
                </div>
                <div className="entryOdd">
                    <h3 className="entryName">Entry Title 3</h3>
                    <h4 className="entryDate">Date</h4>
                    <button type="button" className="Open">Open</button>
                    <button type="button" className="Delete">Delete</button>
                </div>
                <div className="entryEven">
                    <h3 className="entryName">Entry Title 4</h3>
                    <h4 className="entryDate">Date</h4>
                    <button type="button" className="Open">Open</button>
                    <button type="button" className="Delete">Delete</button>
                </div>
            </section>
          </div>
        )
    }
}
export default Journal;