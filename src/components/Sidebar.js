import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FLAGS } from '../utils/constants';
import { setSelectedApplication } from '../actions/selected';

class Sidebar extends Component {
	renderApplicationsArrow() {
		if(this.props.flags.applications === FLAGS.RESOLVED && this.props.applications.length) {
			return <span className="arrow open"></span>;
		}
	}

	renderApplicationListItems() {
		return this.props.applications.map(application => {
			const className = application.id === this.props.selected.application.id ? 'nav-item start active open' : 'nav-item start';
			return (
				<li key={`sidebar-application-${application.id}`} className={className}>
					<a href="javascript:;" className="nav-link " onClick={() => this.props.setSelectedApplication(application)}>
						<i className={application.icon || 'fa fa-file-text-o'} style={{marginRight: '10px'}}></i>
						<span className="title">{application.label}</span>
						<span className="selected"></span>
					</a>
				</li>
			);
		});
	}

	render() {
		return (
			<div className="page-sidebar-wrapper">
				<div className="page-sidebar navbar-collapse collapse">
					<ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
						<li className="sidebar-toggler-wrapper hide">
							<div className="sidebar-toggler"><span></span></div>
						</li>
						<li className="nav-item start active open">
							<a href="javascript:;" className="nav-link nav-toggle">
								<i className="fa fa-cubes" style={{marginRight: '10px'}}></i>
								<span className="title">Applications</span>
								<span className="selected"></span>
								{this.renderApplicationsArrow()}
							</a>
							<ul className="sub-menu" style={{marginTop: 0}}>
								{this.renderApplicationListItems()}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		applications: state.applications,
		flags: state.flags,
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
)(Sidebar);
