import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-services'
import { Button, Input } from '../Utils/Utils'
import {Link, Redirect} from 'react-router-dom'
import './Login.css'

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
  whyDidYouRender(React);
}

export default class LoginForm extends Component {
  static whyDidYouRender = true
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { 
    error: null,
    redirect: false
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    //this.setState({error: null})
    
    const {username, password} = ev.target

    AuthApiService.postLogin({
      username: username.value, 
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .then (
        this.setState({redirect: true})
      )
      .catch(res => {
        //this.setState({error: res.error, redirect: true})
      })
  }

  render() {
    //const { error } = this.state
    return (
      <div className="loginMain">
        <div className='loginForm'>
      <form
        onSubmit={this.handleSubmitJwtAuth}
      >
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
      {console.log(this.state.redirect)}
      {this.state.redirect && <Redirect to={'/journal'}/>}
      </div>
      </div>
    )
  }
}