import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p className="footerText">Kathryn A. Goodreau</p>
                <p className="footerText">E-mail: <a href="mailto:goodreau.kath@gmail.com?Subject=Hello" className="footerLink">goodreau.kath@gmail.com</a></p>
                <p className="footerText">Links of Interest: <a href="https://github.com/KGood93" className="footerLink" target="_blank" rel="noopener noreferrer">Github</a> and <a href="https://www.linkedin.com/in/kathrynagoodreau/" className="footerLink" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </footer>
        )
    }
}

export default Footer