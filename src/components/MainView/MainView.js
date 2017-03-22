import React, { Component } from 'react';

export default class MainView extends Component {
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
                                <span>Dashboard</span>
                            </li>
                        </ul>
                    </div>
					<h3 className="page-title">Dashboard</h3>
				</div>
			</div>
		);
	}
}
