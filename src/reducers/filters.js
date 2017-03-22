import { ACTIONS, DEFAULTS } from '../utils/constants';

export default function filters(state = {}, action) {
	switch(action.type) {
		case ACTIONS.SET_APPLICATION_FILTER:
			return {
				...state,
				[action.data.application]: {
					...state[action.data.application],
					[action.data.filter]: action.data.value
				}
			};
		case ACTIONS.SET_APPLICATION_FILTERS:
			return {
				...state,
				[action.data.application]: action.data.filters
			};
		default:
			return state;
	}
}
