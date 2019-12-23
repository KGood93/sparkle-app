import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css';


class Login extends React.Component {

    render() {
        return (
          <div className="loginMain"> 
            <section class="loginForm">
            <form>
              <div class="loginInfo">
                <h3 class="inputLabel">User Name</h3>
                <input type="text" name="username" class="input" />
              </div>  
              <div class="loginInfo">  
                <h3 class="inputLabel">Password</h3>
                <input type="text" name="password" class="input" value="password" /> <br/>
              </div>  
              <div class="loginButton">
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