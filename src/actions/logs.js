import { ACTIONS } from '../utils/constants';

export function setLogs(data) {
	return {
		type: ACTIONS.SET_LOGS,
		data
	};
}
