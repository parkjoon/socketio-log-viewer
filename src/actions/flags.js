import { ACTIONS } from '../utils/constants';

export function setFlag(data) {
	return {
		type: ACTIONS.SET_FLAG,
		data
	};
}
