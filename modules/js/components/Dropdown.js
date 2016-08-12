import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link, browserHistory } from 'react-router'
import NavLink from './NavLink'
import LoginRegister from './LoginRegister'


class Dropdown extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	showLoginRegister(){
		ReactDOM.render(<LoginRegister/>, document.getElementById('dropdown'));
	}

  render() {
    return (
      <div className="LoginRegister">
        <div className="Sign-up-form">
        	<button onClick={()=>this.showLoginRegister()}>Dropdown</button>
        </div>
        <div id='dropdown'></div>
      </div>
    );
  }
}

export default Dropdown;