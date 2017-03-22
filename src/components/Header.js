import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="page-header navbar navbar-fixed-top">
				<div className="page-header-inner ">
					<div className="page-logo">
						<a href="index.html">
							<img src="../../styles/layouts/layout/img/logo.png" alt="logo" className="logo-default" /> </a>
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
