import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

import {
	Home,
} from 'pages';

export function AppContent(props) {
	return(
		<Switch>
		  <Route exact path="/" component={Home}/>
		</Switch>
	)
}