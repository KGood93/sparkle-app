import React from 'react'
import {Link} from 'react-router-dom'
import './AddEntry.css'
import EntryForm from '../EntryForm/EntryForm'
import Quote from '../Quote/Quote'
import ApiContext from '../../ApiContext'
import config from '../../config'
import ValidationError from '../ValidationError/validationError'

class AddEntry extends React.Component {
    static contextType = ApiContext;

    constructor(props) {
        super(props);
        this.state = {
            title: {
                value: '',
                touched: false
            },
            content: {
                value: '',
                touched: false
            },
            newQuoteId: 1
       }
    }

    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    getNewQuoteId() {
        const {entry=[]} = this.context
        console.log(entry)
        //get length of array //get object of last positions in array
        if (entry.length !== 0) {
          const lastEntry = entry[entry.length - 1]
          console.log(lastEntry)
          //console.log(lastEntry.quoteid)
          const nextQuoteId = lastEntry.quoteid + 1
          //this.setState({newQuoteId: nextQuoteId})
          return nextQuoteId
        }
        else {
          return 1
        }
      }

    updateQuoteId(quoteId) {
        this.setState({newQuoteId: quoteId});
    }

    updateTitle(entryTitle) {
        this.setState({title: {value: entryTitle, touched: true}});
    }

    updateContent(entryContent) {
        this.setState({content: {value: entryContent, touched: true}});
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const { title, content, newQuoteId } = this.state;

        //const newDate = new Date()

        console.log("Title:", title.value);
        console.log("Content:", content.value);

        const entry = {
            //entryid: 110,
            title: title.value,
            //date: newDate.toJSON(),
            content: content.value,
            journalid: 1, 
            quoteid: 1,
        }

        console.log('Entry: ', entry);

        fetch(`${config.API_ENDPOINT}/entry`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(entry)
           })
    //       .then(res => {
    //           if (!res.ok) {
    //               return res.json().then(event => Promise.reject(event))
    //           }
    //           return res.json()
    //       })
           .then(entry => {
               //this.context.addEntry(entry)
               this.props.history.push(`/entry/${entry.entryId}`)
           })
          .catch(error => {
               console.error({ error })
           })
    }

    //Validate Name is not left blank
    validateTitle() {
        const title = this.state.title.value.trim();
        if (title.length === 0) {
            return "Title is Required"
        }
    }

    render() {
        const titleError = this.validateTitle();
        const quoteid = this.getNewQuoteId()
        //this.updateQuoteId(quoteid)
        
        return (
            <section className='AddEntry'>
            <h2>Add Entry</h2>
            <div className="home">
                <Link to='/journal'>Home</Link>
            </div>
            <EntryForm className='EntryAddition' onSubmit={this.handleSubmit}>
                <div className="name">
                    <label htmlFor="EntryName" className="nameLabel">Title:</label>
                    <input 
                        type="text"
                        className="titleInput"
                        name="entryTitle"
                        id="entryTitle"
                        onChange={e => this.updateTitle(e.target.value)}
                    />
                    {this.state.title.touched && <ValidationError message={titleError} />}

                </div>
                <Quote quoteid={quoteid}/>
                <div className="entryContent">
                    <textarea 
                        name="entryContent"
                        id="entryContent"
                        onChange={e => this.updateContent(e.target.value)}
                        >
                    </textarea>
                </div>
                <div className="addition_button">
                    <button type="submit" 
                    disabled = {this.validateTitle()}
                    className="add">
                        Add Entry
                    </button>
                </div>
            </EntryForm>
            </section>
        )
    }
}


export default AddEntry