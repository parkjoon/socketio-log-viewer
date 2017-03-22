import { ACTIONS } from '../utils/constants';

export default function applications(state = [], action) {
	switch(action.type) {
		case ACTIONS.SET_APPLICATIONS:
			return action.data;
		default:
			return state;
	}
}
