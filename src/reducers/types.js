import { ACTIONS } from '../utils/constants';

export default function types(state = [], action) {
	switch(action.type) {
		case ACTIONS.SET_TYPES:
			return action.data;
		default:
			return state;
	}
}
