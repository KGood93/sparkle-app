import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        value: '',
        touched: false
      },
    }
  }

  updateUsername(userName) {
    this.setState({username: {value: userName, touched: true}});
    console.log(userName)
}

  updatePassword(password) {
    this.setState({password: {value: password, touched: true}});
    console.log(password)
}

  handleSubmit = event => {
    event.preventDefault();
    const { content } = this.state;

    const entry = {
        content: content.value,
        modified: new Date()
    }
    console.log('Entry: ', entry);
  }

    render() {
        return (
          <div className="loginMain"> 
            <section className="loginForm">
            <form>
              <div className="loginInfo">
                <h3 className="inputLabel">Username</h3>
                <input type="text" name="username" className="input" onChange={e => this.updateUsername(e.target.value)}/>
              </div>  
              <div className="loginInfo">  
                <h3 className="inputLabel">Password</h3>
                <input type="text" name="password" className="input" onChange={e => this.updatePassword(e.target.value)} /> <br/>
              </div>  
              <div className="loginButton">
                <input type="submit" value="submit" />
              </div>
            </form>
            <Link to='/registration'>New User</Link>
            </section>

          </div>
        )
    }
}
export default Login;