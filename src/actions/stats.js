import { ACTIONS } from '../utils/constants';

export function incrementStat(data) {
	return {
		type: ACTIONS.INCREMENT_STAT,
		data
	};
}
