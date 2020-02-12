import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import './AddEntry.css'
import EntryForm from '../EntryForm/EntryForm'
import Quote from '../Quote/Quote'
import ApiContext from '../../ApiContext'
import config from '../../config'
import ValidationError from '../ValidationError/validationError'
//import JournalApiService from '../../services/journal-api-service'
import TokenService from '../../services/token-service'

class AddEntry extends React.Component {
    static contextType = ApiContext;

    constructor(props) {
        super(props);
        this.getNewQuoteId = this.getNewQuoteId.bind(this)
        this.context = ApiContext
        this.state = {
            title: {
                value: '',
                touched: false
            },
            content: {
                value: '',
                touched: false
            },
            quoteid: this.getNewQuoteId(),
            redirect: false
       }
       
    }

    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    componentDidMount() {
        this.getNewQuoteId()
    }

    getNewQuoteId() {
        const {entry=[]} = this.context
        //get length of array //get object of last positions in array
        if (entry.length !== 0) {
          const lastEntry = entry[entry.length - 1]
          const nextQuoteId = lastEntry.quoteid + 1
          this.setState({quoteid: nextQuoteId})
        }
        else {
          this.setState({quoteid: 1})
        }
      }

    updateTitle(entryTitle) {
        this.setState({title: {value: entryTitle, touched: true}});
    }

    updateContent(entryContent) {
        this.setState({content: {value: entryContent, touched: true}});
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const { title, content, quoteid } = this.state;

        //console.log("Title:", title.value);
        //console.log("Content:", content.value);
        //console.log(quoteid)

        const entry = {
            title: title.value,
            content: content.value,
            journalid: 1,
            quoteid: this.state.quoteid 
        }

        //console.log('Entry: ', entry);

        fetch(`${config.API_ENDPOINT}/entry`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(entry)
           })
           .then(
                this.setState({redirect: true})
           )
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
                <Quote quoteid={this.state.quoteid}/>
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
                    className="add"
                    >
                        Add Entry
                    </button>
                </div>
            </EntryForm>
            {this.state.redirect && <Redirect to={'/journal'}/>}
            </section>
        )
    }
}


export default AddEntry