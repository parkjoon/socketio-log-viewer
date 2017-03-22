import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DEFAULTS } from '../utils/constants';
import { setSelectedApplication } from '../actions/selected';

class Header extends Component {
	onLogoClick() {
		this.props.setSelectedApplication(DEFAULTS.selected.application);
	}

	render() {
		return (
			<div className="page-header navbar navbar-fixed-top">
				<div className="page-header-inner ">
					<div className="page-logo">
						<a href="javascript:;" onClick={() => this.onLogoClick()}>
							<img src="../../styles/pages/img/iwd-logo-1.png" alt="logo" className="logo-default" height="25" /> </a>
							<div className="menu-toggler sidebar-toggler">
							<span></span>
						</div>
					</div>
					<a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
						<span></span>
					</a>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setSelectedApplication: data => dispatch(setSelectedApplication(data))
	};
}

export default connect(
	null,
	mapDispatchToProps
)(Header);
