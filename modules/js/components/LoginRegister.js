import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link, browserHistory } from 'react-router'
import NavLink from './NavLink'
import SignUp	from './SignUp'
import SignIn from './SignIn'
import SignOut from './SignOut'


class LoginRegister extends Component {

	showSignUp(){
		ReactDOM.render(<SignUp/>, document.getElementById('loginRegister'));
	}

	showSignIn(){
		ReactDOM.render(<SignIn/>, document.getElementById('loginRegister'));
	}

  render() {
    return (
      <div className="LoginRegister">
        <div className="Sign-up-form">
        	<button onClick={()=>this.showSignUp()}>Register</button>
        	<button onClick={()=>this.showSignIn()}>Login</button>
        	<SignOut/>
        </div>
        <div id='loginRegister'></div>
      </div>
    );
  }
}

export default LoginRegister;