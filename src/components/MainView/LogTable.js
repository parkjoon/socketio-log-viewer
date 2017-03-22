import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TYPE_TO_CLASS } from '../../utils/constants';

class LogTable extends Component {
	renderLogTableRows() {
		return this.props.logs.map(log => {
			return (
				<tr key={`log-item-${log.time}`} className={TYPE_TO_CLASS[log.type]}>
					<td>{log.time}</td>
					<td>{log.type}</td>
					<td>{log.message}</td>
				</tr>
			);
		});
	}

	render() {
		if(this.props.selected.application.id === '') {
			return null;
		}

		return (
			<div className="mt-bootstrap-tables">
				<div className="portlet box blue">
					<div className="portlet-title">
						<div className="caption"><i className="fa fa-file-text-o" style={{marginRight: '10px'}}></i>Logs</div>
					</div>
					<div className="portlet-body">
						<div className="table-scrollable">
							<table className="table table-bordered table-hover">
								<thead>
									<tr>
										<th>Time</th>
										<th>Type</th>
										<th>Message</th>
									</tr>
								</thead>
								<tbody>
									{this.renderLogTableRows()}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		logs: state.logs[state.selected.application.id] || [],
		selected: state.selected
	};
}

export default connect(
	mapStateToProps,
	null
)(LogTable);
