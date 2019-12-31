import React from 'react';
import './Registration.css';

class Registration extends React.Component {
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
    
  }

  render() {
    return (
          <div className="register"> 
            <section className="registrationForm">
            <form>
              <div className="loginInfo">
                <h3 className="inputLabel">User Name</h3>
                <input type="text" name="username" className="input" onChange={e => this.updateUsername(e.target.value)}/>
              </div>  
              <div className="loginInfo">  
                <h3 className="inputLabel">Password</h3>
                <input type="text" name="password" className="input" onChange={e => this.updatePassword(e.target.value)} /> <br/>
              </div>  
              <div className="loginInfo">  
                <h3 className="inputLabel">Retype Password</h3>
                <input type="text" name="password" className="input" onChange={e => this.updatePassword(e.target.value)} /> <br/>
              </div>
              <div className="loginButton">
                <input type="submit" value="submit" />
              </div>
            </form>
        </section>
          </div>
        )
    }
}
export default Registration;