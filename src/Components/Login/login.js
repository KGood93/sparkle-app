import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-services'
import { Button, Input } from '../Utils/Utils'
import {Link, Redirect} from 'react-router-dom'
import './Login.css'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { 
    error: null,
    redirect: false
  }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(username.value, password.value)
    )

    username.value = ''
    password.value = ''
    this.props.onLoginSuccess()
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({error: null})
    const {username, password} = ev.target

    AuthApiService.postLogin({
      username: username.value, 
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        //console.log(res)
        //TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
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
      <div className="loginMain">
        <div className='loginForm'>
      <form
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='username'>
          <label htmlFor='inputLabel'>
            Username
          </label>
          <Input
            name='username'
            className='input'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='inputLabel'>
            Password
          </label>
          <Input
            name='password'
            type='password'
            className='input'>
          </Input>
        </div>
        <Button type='submit'>
          Login
        </Button>
        <br />
        <Link to='/registration'>New User?</Link>
      </form>
      {this.state.redirect && <Redirect to={'/journal'}/>}
      </div>
      </div>
    )
  }
}