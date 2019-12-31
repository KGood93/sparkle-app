import React from 'react'
import {Link} from 'react-router-dom'
//import './AddEntry.css'
import EntryForm from '../EntryForm/EntryForm'
import Quote from '../Quote/Quote'
import ApiContext from '../../ApiContext'
import config from '../../config'
//import ValidationError from '../ValidationError/validationError'

class AddEntry extends React.Component {
    static contextType = ApiContext;

    constructor(props) {
        super(props);
        this.state = {
            content: {
                value: '',
                touched: false
            },
       }
    }

    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    updateName(noteName) {
        this.setState({name: {value: noteName, touched: true}});
    }

    updateContent(entryContent) {
        this.setState({content: {value: entryContent, touched: true}});
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const { content } = this.state;

        //console.log("Name:", name.value);
        console.log("Content:", content.value);

        const entry = {
            content: content.value,
            modified: new Date()
        }
        console.log('Entry: ', entry);

        //fetch(`${config.API_ENDPOINT}/entry`, {
        //    method: 'POST',
        //    headers: {'Content-Type':'application/json'},
        //    body: JSON.stringify(entry)
        //   })
        //   .then(res => {
        //       if (!res.ok) {
        //           return res.json().then(event => Promise.reject(event))
        //       }
        //       return res.json()
        //   })
        //   .then(entry => {
        //       this.context.addNote(entry)
        //       this.props.history.push(`/entry/${entry.entryId}`)
        //   })
        //   .catch(error => {
        //       console.error({ error })
        //   })
    }

    //Validate Name is not left blank
    //validateName() {
    //    const name = this.state.name.value.trim();
    //    if (name.length === 0) {
    //        return "Name is Required"
    //    }
    //}

    render() {
        //const { folders=[] } = this.context;
        //const nameError = this.validateName();
        
        return (
            <section className='AddEntry'>
            <h2>Add Entry</h2>
            <Link to='/journal'>Home</Link>
            <EntryForm className='EntryAddition' onSubmit={this.handleSubmit}>
                <div className="Entry-name">
                    <label htmlFor="EntryName">Name</label>
                    <input 
                        type="text"
                        className="Entry_control"
                        name="entryName"
                        id="entryName"
                        onChange={e => this.updateName(e.target.value)}
                        />
                </div>
                <Quote />
                <div className="entry-content">
                    <textarea 
                        name="entryContent"
                        id="entryContent"
                        onChange={e => this.updateContent(e.target.value)}
                        >
                    </textarea>
                </div>
                <div className="addition_button">
                    <button 
                        type="submit"
                        >
                        Add Entry
                    </button>
                </div>
            </EntryForm>
            </section>
        )
    }
}


export default AddEntry