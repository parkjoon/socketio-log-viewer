import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';
import MainView from './MainView/MainView';
import Sidebar from './Sidebar';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="clearfix"></div>
				<div className="page-container">
					<Sidebar />
					<MainView />
				</div>
				<Footer />
			</div>
		);
	}
}
