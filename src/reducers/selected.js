import { ACTIONS } from '../utils/constants';

export default function selected(state = {}, action) {
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
