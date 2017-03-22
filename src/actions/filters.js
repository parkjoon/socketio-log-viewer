import { ACTIONS } from '../utils/constants';

export function setApplicationFilter(data) {
	return {
		type: ACTIONS.SET_APPLICATION_FILTER,
		data
	};
}

export function setApplicationFilters(data) {
	return {
		type: ACTIONS.SET_APPLICATION_FILTERS,
		data
	};
}
