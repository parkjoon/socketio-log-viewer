import React, { Component } from 'react';
import RTChart from 'react-rt-chart';
import { connect } from 'react-redux';

class AggregateChart extends Component {
	constructor(props) {
		super(props);
		this.forceUpdater;
	}

	componentDidMount() {
		this.forceUpdater = setInterval(() => this.forceUpdate(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.forceUpdater);
	}

	render() {
		const data = {
			date: new Date(),
			...this.props.stats
		};

		return <RTChart fields={Object.keys(this.props.stats)} data={data} maxValues={200} />;
	}
}

function mapStateToProps(state) {
	return {
		stats: state.stats
	};
}

export default connect(
	mapStateToProps,
	null
)(AggregateChart);
