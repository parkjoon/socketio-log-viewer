import React, { Component } from 'react';

export default class Sidebar extends Component {
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
								<i className="icon-home"></i>
								<span className="title">Dashboard</span>
								<span className="selected"></span>
								<span className="arrow open"></span>
							</a>
							<ul className="sub-menu">
								<li className="nav-item start active open">
									<a href="index.html" className="nav-link ">
										<i className="icon-bar-chart"></i>
										<span className="title">Dashboard 1</span>
										<span className="selected"></span>
									</a>
								</li>
								<li className="nav-item start ">
									<a href="dashboard_2.html" className="nav-link ">
										<i className="icon-bulb"></i>
										<span className="title">Dashboard 2</span>
										<span className="badge badge-success">1</span>
									</a>
								</li>
								<li className="nav-item start ">
									<a href="dashboard_3.html" className="nav-link ">
										<i className="icon-graph"></i>
										<span className="title">Dashboard 3</span>
										<span className="badge badge-danger">5</span>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
