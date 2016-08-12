import React, { Component } from 'react';
import { Link, Router, browserHistory, RouterContext } from 'react-router'

class SignOut extends Component {

  componentDidMount(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
      }
      else{
      }
    });
  }

  signOut(){
    firebase.auth().signOut().then(function() {
      const path = '/'
			browserHistory.push(path)
    }, function(error) {
      //An error happened
    });
  }

  render() {
    return (
      <div>
        <div><button onClick={()=>this.signOut()}>Sign out</button></div>
      </div>
    );
  }
}

export default SignOut;