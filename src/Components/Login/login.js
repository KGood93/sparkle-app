import React from 'react';
import './Login.css';


class Login extends React.Component {

    render() {
        return (
          <div className="loginMain"> 
            <section class="loginForm">
            <form>
              <div class="loginInfo">
                <h3 class="inputLabel">User Name</h3>
                <input type="text" name="username" class="input" value="username" />
              </div>  
              <div class="loginInfo">  
                <h3 class="inputLabel">Password</h3>
                <input type="text" name="password" class="input" value="password" /> <br/>
              </div>  
              <div class="loginButton">
                <input type="submit" value="submit" />
              </div>
            </form>
        </section>
          </div>
        )
    }
}
export default Login;