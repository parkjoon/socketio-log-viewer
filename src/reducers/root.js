import { combineReducers } from 'redux';

import applications from './applications';
import flags from './flags';
import logs from './logs';
import selected from './selected';

export default combineReducers({
	applications,
	flags,
	logs,
	selected,
	socket: (s = {}) => s
});
