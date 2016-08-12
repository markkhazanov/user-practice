import React, { Component } from 'react';
import { Link, Router, browserHistory, RouterContext } from 'react-router'


class SignIn extends Component {

	constructor(props, context) {
		super(props);
	}

  componentDidMount(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        document.getElementById('current-user').innerHTML = user.email;
        const path = '/profile/${email}'
				browserHistory.push(path)
      }
      else{
        document.getElementById('current-user').innerHTML = "Sign in or sign up!";
      }
    });
  }

  signIn(event){
  	event.preventDefault()
    const email = event.target.elements[0].value
    const password = event.target.elements[1].value

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		    var errorCode = error.code;
		    var errorMessage = error.message;
		    console.log(errorMessage)
    });
  }

  render() {
    return (
      <div className="LoginRegister">
        <div className="Sign-in-form">
        	<div id='current-user'></div>
          <h1>Sign In </h1>
          <form onSubmit={this.signIn}>
						<input type="text" placeholder="email"/>{' '}<br/>
						<input type="password" placeholder="password"/>{' '}<br/>
						<button type="submit">SignIn</button>
					</form>
          <p id="si-error"></p>
        </div>
      </div>
    );
  }
}

export default SignIn;
