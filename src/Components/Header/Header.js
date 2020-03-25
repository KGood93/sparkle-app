//Header content with link to home page

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {

  render() {
    return (
      <nav className='Header'>
        <h1 className='head'>
          <Link to='/'>
            {' '}
            Sparkle
          </Link>
        </h1>
      </nav>
    )
  }
}