import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-services'
import './Registration.css'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { 
    error: null,
    redirect: false  
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    this.setState({error: null})
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
    })
    .then(user => {
      username.value = ''
      password.value = ''
      this.props.onRegistrationSuccess()
    })
    .then(
      this.setState({redirect: true})
    )
    .catch(res => {
      this.setState({error: res.error})
    })

  }

  render() {
    const { error } = this.state
    return (
      <div className="register">
      <div className='registrationForm'>
      <form
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='username'>
          <label htmlFor='RegistrationForm_username' className="inputLable">
            Username <Required />
          </label>
          <Input
            name='username'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm_password' className="inputLable">
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm_password'>
          </Input>
        </div>
        <Button type='submit'>
          Register
        </Button>
      </form>
      {this.state.redirect && <Redirect to={'/login'}/>}
      </div>
      </div>
    )
  }
}