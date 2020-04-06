import React from 'react';

import {
	Route,
	Switch,
	Link
} from "react-router-dom";



export function Auth(props){
	return (
		<Switch>
			<Route exact path="/auth/login" component={Login}/>
			<Route exact path="/auth/signup" component={Signup}/>
			<Route component={Login}/>
		</Switch>
	)
}

function Login(props){
	return (
		<>
			<div>Hello Login</div>
			<Link children="signup" to="/auth/signup"/>
		</>
	)
}

function Signup(props){
	return (
		<>
			<div>Hello Signup</div>
			<Link children="login" to="/auth/login"/>
		</>
	)
}