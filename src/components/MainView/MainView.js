import React, { Component } from 'react';
import { connect } from 'react-redux';

import LogTable from './LogTable';

class MainView extends Component {
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
					<LogTable />
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
