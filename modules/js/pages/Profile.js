import React, { Component } from 'react'
import ReactDOM from 'react-dom'

var user = firebase.auth().currentUser;

class Profile extends Component {

	constructor(props, context) {
		super(props);
	}

	render() {
		return (
			<div>
			<h1>Profile</h1>
			<div id="current-user"></div>
			</div>
		)
	}
}

export default Profile
