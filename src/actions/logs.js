import { ACTIONS } from '../utils/constants';

export function addLog(data) {
	return {
		type: ACTIONS.ADD_LOG,
		data
	};
}

export function setLogs(data) {
	return {
		type: ACTIONS.SET_LOGS,
		data
	};
}
