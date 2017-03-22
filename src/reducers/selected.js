import { ACTIONS, DEFAULTS } from '../utils/constants';

export default function selected(state = DEFAULTS.selected, action) {
	switch(action.type) {
		case ACTIONS.SET_SELECTED_APPLICATION:
			return {
				...state,
				application: action.data
			};
		default:
			return state;
	}
}
