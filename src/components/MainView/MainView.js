import React, { Component } from 'react';
import { connect } from 'react-redux';

import AggregateChart from './AggregateChart';
import SocketIOLogTable from './SocketIOLogTable';
import { DEFAULTS } from '../../utils/constants';
import { setSelectedApplication } from '../../actions/selected';

class MainView extends Component {
	onHomeClick() {
		this.props.setSelectedApplication(DEFAULTS.selected.application);
	}

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
		return <SocketIOLogTable />;
	}

	render() {
		return (
			<div className="page-content-wrapper">
				<div className="page-content">
					<div className="page-bar">
                        <ul className="page-breadcrumb">
                            <li>
                                <a href="javascript:;" onClick={() => this.onHomeClick()}>Home</a>
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

function mapDispatchToProps(dispatch) {
	return {
		setSelectedApplication: data => dispatch(setSelectedApplication(data))
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainView);
