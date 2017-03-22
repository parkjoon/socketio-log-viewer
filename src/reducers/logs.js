import { ACTIONS } from '../utils/constants';

export default function rooms(state = {}, action) {
	switch(action.type) {
		// TODO - refactor logic.
		case ACTIONS.ADD_LOG:
			return {
				...state,
				[action.data.application]: [
					...(state[action.data.application] || []),
					action.data
				]
			};
		case ACTIONS.SET_LOGS:
			return action.data;
		default:
			return state;
	}
}
