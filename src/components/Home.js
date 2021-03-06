import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from './Footer';
import Header from './Header';
import MainView from './MainView/MainView';
import Sidebar from './Sidebar';
import { ACTIONS, DEFAULTS, FLAGS } from '../utils/constants';
import { addLog } from '../actions/logs';
import { incrementStat } from '../actions/stats';
import { setApplicationFilters } from '../actions/filters';
import { setApplications } from '../actions/applications';
import { setFlag } from '../actions/flags';

class Home extends Component {
	componentDidMount() {
		this.props.socket.on(ACTIONS.LOG, data => {
			this.props.addLog(data);
			this.props.incrementStat(data.type);
		});
		this.props.socket.on(ACTIONS.SET_APPLICATIONS, data => {
			this.props.setApplications(data);
			this.props.setFlag({ flag: 'applications', value: FLAGS.RESOLVED });
			this.setUpAllApplicationFilters();
			this.joinAllApplicationRooms();
		});

		this.props.setFlag({ flag: 'applications', value: FLAGS.REQUESTED });
		this.props.socket.emit(ACTIONS.GET_APPLICATIONS);
	}

	setUpAllApplicationFilters() {
		this.props.applications.forEach(application => this.props.setApplicationFilters({
			application: application.id,
			filters: DEFAULTS.applicationFilter
		}));
	}

	// Might want to consider performance issues with this strategy.
	joinAllApplicationRooms() {
		this.props.applications.forEach(application => this.props.socket.emit(ACTIONS.JOIN_ROOM, `APPLICATION_${application.id}`));
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
		applications: state.applications,
		socket: state.socket
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addLog: data => dispatch(addLog(data)),
		incrementStat: data => dispatch(incrementStat(data)),
		setApplicationFilters: data => dispatch(setApplicationFilters(data)),
		setApplications: data => dispatch(setApplications(data)),
		setFlag: data => dispatch(setFlag(data))
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
