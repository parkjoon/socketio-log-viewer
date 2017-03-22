import { ACTIONS } from '../utils/constants';

export function setApplications(data) {
	return {
		type: ACTIONS.SET_APPLICATIONS,
		data
	};
}
