import { combineReducers } from 'redux';

import applications from './applications';
import selected from './selected';
import types from './types';

export default combineReducers({
	applications,
	selected,
	socket: (s = {}) => s,
	types
});
