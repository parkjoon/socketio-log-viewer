import { ACTIONS, DEFAULTS } from '../utils/constants';

export default function stats(state = DEFAULTS.stats, action) {
	switch(action.type) {
		case ACTIONS.INCREMENT_STAT:
			return {
				...state,
				[action.data]: state[action.data] + 1
			};
		default:
			return state;
	}
}
