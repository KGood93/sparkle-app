import React from 'react';
import './Registration.css';

class Registration extends React.Component {

    render() {
        return (
          <div className="register"> 
            <section className="registrationForm">
            <form>
              <div className="loginInfo">
                <h3 className="inputLabel">User Name</h3>
                <input type="text" name="username" className="input" value="username" />
              </div>  
              <div className="loginInfo">  
                <h3 className="inputLabel">Password</h3>
                <input type="text" name="password" className="input" value="password" /> <br/>
              </div>  
              <div className="loginInfo">  
                <h3 className="inputLabel">Retype Password</h3>
                <input type="text" name="password" className="input" value="password" /> <br/>
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