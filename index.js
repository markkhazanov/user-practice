import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import { render } from 'react-dom'
import App from './modules/App'
import Home from './modules/js/pages/Home'
import Profile from './modules/js/pages/Profile'
import Design from './modules/js/pages/Design'
import Tech from './modules/js/pages/Tech'
import About from './modules/js/pages/About'
import Repo from './modules/js/components/Repo'
import Repos from './modules/js/components/Repos'

var user = firebase.auth().currentUser;
var partial;
var word;
if (user){
	partial = Profile;
	word = "profile";
}
else{
	partial = Home;
	word = "home";
}
console.log(word);

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			{}
			<IndexRoute component={partial}/>
			<Route path="/repos" component={Repos}>
				<Route path="/repos/:userName/:repoName" component={Repo}/>
			</Route>
			<Route path="/profile/:userName" component={Profile}/>
			<Route path="/design" component={Design}/>
			<Route path="/tech" component={Tech}/>
			<Route path="/about" component={About}/>
		</Route>
	</Router>
), document.getElementById('app'))

