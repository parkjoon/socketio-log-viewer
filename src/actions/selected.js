import { ACTIONS } from '../utils/constants';

export function setSelectedApplication(data) {
	return {
		type: ACTIONS.SET_SELECTED_APPLICATION,
		data
	};
}
