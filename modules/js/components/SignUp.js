import React, { Component } from 'react';
import { Link, Router, browserHistory, RouterContext } from 'react-router'

class SignUp extends Component {

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

  signUp(event){
  	event.preventDefault()
    const userName = event.target.elements[0].value
    const email = event.target.elements[1].value
    const password = event.target.elements[2].value

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
    });

  }

	// handleSubmit(event){
	// 	event.preventDefault()
	// 	const userName = event.target.elements[0].value
	// 	const path = '/profile/${userName}'
	// 	this.context.router.push(path)
	// }

  render() {
    return (
      <div className="LoginRegister">
        <div className="Sign-up-form">
        	<div id='current-user'></div>
          <h1>Sign Up </h1>
        	<form onSubmit={this.signUp}>
        		<input type="text" placeholder="username"/>{' '}<br/>
						<input type="text" placeholder="email"/>{' '}<br/>
						<input type="password" placeholder="password"/>{' '}<br/>
						<button type="submit">SignUp</button>
					</form>
          <p id="error"></p>
        </div>
      </div>
    );
  }
}

export default SignUp;
