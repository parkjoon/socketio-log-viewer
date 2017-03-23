import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setApplicationFilter } from '../../actions/filters';
import { TYPE_TO_CLASS } from '../../utils/constants';

class SocketIOLogTable extends Component {
	toggleTypeFilter(type) {
		this.props.setApplicationFilter({
			application: this.props.selected.application.id,
			filter: type,
			value: !this.props.filters[this.props.selected.application.id][type]
		});
	}

	renderFilters() {
		return (
			<div className="mt-checkbox-inline">
				<label className="mt-checkbox">
					<input id="hover" type="checkbox" checked={this.props.filters[this.props.selected.application.id].DEBUG} onChange={() => this.toggleTypeFilter('DEBUG')} />DEBUG
					<span></span>
				</label>
				<label className="mt-checkbox">
					<input id="striped" type="checkbox" checked={this.props.filters[this.props.selected.application.id].ERROR} onChange={() => this.toggleTypeFilter('ERROR')} />ERROR
					<span></span>
				</label>
				<label className="mt-checkbox">
					<input id="condensed" type="checkbox" checked={this.props.filters[this.props.selected.application.id].FATAL} onChange={() => this.toggleTypeFilter('FATAL')} />FATAL
					<span></span>
				</label>
				<label className="mt-checkbox">
					<input id="condensed" type="checkbox" checked={this.props.filters[this.props.selected.application.id].INFO} onChange={() => this.toggleTypeFilter('INFO')} />INFO
					<span></span>
				</label>
				<label className="mt-checkbox">
					<input id="condensed" type="checkbox" checked={this.props.filters[this.props.selected.application.id].TRACE} onChange={() => this.toggleTypeFilter('TRACE')} />TRACE
					<span></span>
				</label>
				<label className="mt-checkbox">
					<input id="condensed" type="checkbox" checked={this.props.filters[this.props.selected.application.id].WARNING} onChange={() => this.toggleTypeFilter('WARNING')} />WARNING
					<span></span>
				</label>
			</div>
		);
	}

	renderLogTableRows() {
		return this.props.logs.map(log => {
			if(this.props.filters[this.props.selected.application.id][log.type]) {
				return (
					<tr key={`log-item-${log.time}`} className={TYPE_TO_CLASS[log.type]}>
						<td>{(new Date(log.time)).toLocaleString()}</td>
						<td>{log.type}</td>
						<td>{log.message}</td>
					</tr>
				);
			}
		});
	}

	render() {
		return (
			<div className="mt-bootstrap-tables">
				<div className="portlet box blue">
					<div className="portlet-title">
						<div className="caption"><i className="fa fa-file-text-o" style={{marginRight: '10px'}}></i>SocketIO Server Logs</div>
					</div>
					<div className="portlet-body">
						{this.renderFilters()}
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
		filters: state.filters,
		logs: state.logs[state.selected.application.id] || [],
		selected: state.selected
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setApplicationFilter: data => dispatch(setApplicationFilter(data))
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SocketIOLogTable);
