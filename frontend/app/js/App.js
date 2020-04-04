import React from 'react';
import logo from '../files/logo.svg';
import '../sass/App.scss';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

import {
  AppLayout,
} from 'layouts';

import {
  Auth,
} from 'pages';

function App() {
  return (
    <div className="App">
	  		{/* Todo: here switch between app and auth,
	  		based on if user is logged in or not */}
    	<Switch>
    		<Route path="/auth" component={Auth}/>
    		<Route component={AppLayout}/>
    	</Switch>
    </div>
  );
}

export default App;
