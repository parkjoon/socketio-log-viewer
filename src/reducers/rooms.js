import { ACTIONS } from '../utils/constants';

export default function rooms(state = [], action) {
	switch(action.type) {
		case ACTIONS.SET_ROOMS:
			return action.data;
		default:
			return state;
	}
}
