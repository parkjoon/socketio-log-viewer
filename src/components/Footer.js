import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<div className="page-footer">
				<div className="page-footer-inner"> SocketIO Log Viewer by Joon Park.
					<a href="https://github.com/parkjoon/socketio-log-viewer" target="_blank" style={{ marginLeft: '10px' }}>GitHub</a>
				</div>
				<div className="scroll-to-top">
					<i className="icon-arrow-up"></i>
				</div>
			</div>
		);
	}
}
