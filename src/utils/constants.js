export const ACTIONS = {
	ADD_LOG: 'ADD_LOG',
	GET_APPLICATIONS: 'GET_APPLICATIONS',
	GET_TYPES: 'GET_TYPES',
	LOG: 'LOG',
	JOIN_ROOM: 'JOIN_ROOM',
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
	flags: {
		applications: FLAGS.NONE
	},
	selected: {
		application: {
			id: '',
			label: ''
		}
	}
};

export const TYPE_TO_CLASS = {
	DEBUG: 'active',
	ERROR: 'danger',
	FATAL: 'danger',
	INFO: 'info',
	TRACE: 'default',
	WARNING: 'warning'
};
