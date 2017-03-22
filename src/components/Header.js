import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="page-header navbar navbar-fixed-top">
				<div className="page-header-inner ">
					<div className="page-logo">
						<a href="javascript:;">
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
