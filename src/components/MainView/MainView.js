import React, { Component } from 'react';
import { connect } from 'react-redux';

import AggregateChart from './AggregateChart';
import LogTable from './LogTable';

class MainView extends Component {
	renderContent() {
		if(this.props.selected.application.id === '') {
			return (
				<div>
					<div className="note note-success">
						<h4 className="block">Welcome to the SocketIO Log Viewer</h4>
						<p style={{marginBottom: '10px'}}>Select an application in the sidebar to view logs in real time.</p>
					</div>
					<AggregateChart />
				</div>
			);
		}
		return <LogTable />;
	}

	render() {
		return (
			<div className="page-content-wrapper">
				<div className="page-content">
					<div className="page-bar">
                        <ul className="page-breadcrumb">
                            <li>
                                <span>Home</span>
                            </li>
                            <li>
								<i className="fa fa-circle"></i>
                                <span>Applications</span>
                            </li>
                        </ul>
                    </div>
					<h3 className="page-title">{this.props.selected.application.label}</h3>
					{this.renderContent()}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		selected: state.selected
	};
}

export default connect(
	mapStateToProps,
	null
)(MainView);
