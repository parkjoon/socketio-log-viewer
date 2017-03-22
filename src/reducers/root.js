import { combineReducers } from 'redux';

import applications from './applications';
import filters from './filters';
import flags from './flags';
import logs from './logs';
import selected from './selected';
import stats from './stats';

export default combineReducers({
	applications,
	filters,
	flags,
	logs,
	selected,
	socket: (s = {}) => s,
	stats
});
