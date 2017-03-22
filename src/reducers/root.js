import { combineReducers } from 'redux';

import applications from './applications';
import logs from './logs';
import selected from './selected';

export default combineReducers({
	applications,
	logs,
	selected,
	socket: (s = {}) => s
});
