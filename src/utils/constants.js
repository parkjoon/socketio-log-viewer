export const ACTIONS = {
	ADD_LOG: 'ADD_LOG',
	GET_APPLICATIONS: 'GET_APPLICATIONS',
	GET_TYPES: 'GET_TYPES',
	LOG: 'LOG',
	INCREMENT_STAT: 'INCREMENT_STAT',
	JOIN_ROOM: 'JOIN_ROOM',
	SET_APPLICATION_FILTER: 'SET_APPLICATION_FILTER',
	SET_APPLICATION_FILTERS: 'SET_APPLICATION_FILTERS',
	SET_APPLICATIONS: 'SET_APPLICATIONS',
	SET_FLAG: 'SET_FLAG',
	SET_SELECTED_APPLICATION: 'SET_SELECTED_APPLICATION',
	SET_TYPES: 'SET_TYPES'
};

export const FLAGS = {
	NONE: 'NONE',
	RESOLVED: 'RESOLVED',
	REQUESTED: 'REQUESTED'
};

export const DEFAULTS = {
	applicationFilter: {
		DEBUG: true,
		ERROR: true,
		FATAL: true,
		INFO: true,
		LOG: true,
		TRACE: true,
		WARNING: true
	},
	flags: {
		applications: FLAGS.NONE
	},
	selected: {
		application: {
			id: '',
			icon: '',
			label: ''
		}
	},
	stats: {
		DEBUG: 0,
		ERROR: 0,
		FATAL: 0,
		INFO: 0,
		LOG: 0,
		TRACE: 0,
		WARNING: 0
	}
};

export const TYPE_TO_CLASS = {
	DEBUG: 'active',
	ERROR: 'danger',
	FATAL: 'danger',
	INFO: 'info',
	LOG: 'log',
	TRACE: 'default',
	WARNING: 'warning'
};
