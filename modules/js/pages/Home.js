import React from 'react'
import { Link } from 'react-router'
import NavLink from '../components/NavLink'

var sectionOne = {
	background: "yellow",
};

var sectionTwo = {
	background: "red",
};

var sectionThree = {
	background: "blue",
};

export default React.createClass({
	render() {
		return(
			<div><h1>Home</h1>
				<div id="pageLinks">
					<Link to="/design"><div style={sectionOne} className="border col-md-4 section" id="section1">Design</div></Link>
					<Link to="/tech"><div style={sectionTwo} className="border col-md-4 section" id="section2">Tech</div></Link>
					<Link to="/about"><div style={sectionThree} className="border col-md-4 section" id="section3">About</div></Link>
				</div>
			</div>
		) 
	}
})