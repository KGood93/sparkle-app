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

    //updateName(noteName) {
    //    this.setState({name: {value: noteName, touched: true}});
    //}

    updateContent(entryContent) {
        this.setState({content: {value: entryContent, touched: true}});
    }

    //updateFolder(folderSelect) {
    //    this.setState({folderId: {value: folderSelect, touched: true}});
    //}
    
    handleSubmit = event => {
        event.preventDefault();
        const { content } = this.state;

        //console.log("Name:", name.value);
        console.log("Content:", content.value);
        //console.log("FolderId:", folderId.value);

        const entry = {
            content: content.value,
            modified: new Date()
        }
        console.log('Entry: ', entry);

        fetch(`${config.API_ENDPOINT}/entry`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(entry)
           })
           .then(res => {
               if (!res.ok) {
                   return res.json().then(event => Promise.reject(event))
               }
               return res.json()
           })
           .then(entry => {
               this.context.addNote(entry)
               this.props.history.push(`/entry/${entry.entryId}`)
           })
           .catch(error => {
               console.error({ error })
           })
    }

    //Validate Name is not left blank
    //validateName() {
    //    const name = this.state.name.value.trim();
    //    if (name.length === 0) {
    //        return "Name is Required"
    //    }
    //}
    
    //Validate Folder Selected
    //validateFolder() {
    //    const folder = this.state.folderId.value.trim();
    //    if (folder.value === 'null') {
    //        return "Please Select Folder"
    //    }
    //}
    
    render() {
        //const { folders=[] } = this.context;
        //const nameError = this.validateName();
        //const folderError = this.validateFolder();

        return (
            <section className='AddEntry'>
            <h2>Add Entry</h2>
            <Link to='/journal'>Home</Link>
            <Quote />
            <EntryForm />
            </section>
        )
    }
}

export default AddEntry