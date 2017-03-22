import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from './Footer';
import Header from './Header';
import MainView from './MainView/MainView';
import Sidebar from './Sidebar';
import { ACTIONS } from '../utils/constants';
import { addLog } from '../actions/logs';
import { setApplications } from '../actions/applications';

class Home extends Component {
	componentDidMount() {
		this.props.socket.on(ACTIONS.LOG, data => this.props.addLog(data));
		this.props.socket.on(ACTIONS.SET_APPLICATIONS, data => this.props.setApplications(data));
		this.props.socket.emit(ACTIONS.GET_APPLICATIONS);
	}

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

function mapStateToProps(state) {
	return {
		socket: state.socket
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addLog: data => dispatch(addLog(data)),
		setApplications: data => dispatch(setApplications(data))
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
