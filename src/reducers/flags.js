import { ACTIONS, DEFAULTS } from '../utils/constants';

export default function flags(state = DEFAULTS.flags, action) {
	switch(action.type) {
		case ACTIONS.SET_FLAG:
			return {
				...state,
				[action.data.flag]: action.data.value
			};
		default:
			return state;
	}
}
