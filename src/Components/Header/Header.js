import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import { Hyph } from '../Utils/Utils'
//import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component {
  handleLogoutClick = () => {
  }

  renderLogoutLink() {
    return (
      <div className='Header_logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header_not-logged-in'>
        <Link
          to='/register'>
          Register
        </Link>
        <Link
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>
            {' '}
            Sparkle
            </Link>
        </h1>
        <Link to="/login">Login</Link>
      </nav>
    )
  }
}