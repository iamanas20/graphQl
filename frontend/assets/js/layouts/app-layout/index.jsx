import React from 'react';

import './app-layout.scss';

import {
	AppContent,
} from 'layouts';

export function AppLayout (){
	return (
		<div>
			<div className="navBar">navBar</div>
			<div className="sideBar">sideBar</div>
			<AppContent />
		</div>
	)
}