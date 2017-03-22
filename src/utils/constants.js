export const ACTIONS = {
	ADD_LOG: 'ADD_LOG',
	GET_APPLICATIONS: 'GET_APPLICATIONS',
	GET_TYPES: 'GET_TYPES',
	LOG: 'LOG',
	SET_APPLICATIONS: 'SET_APPLICATIONS',
	SET_SELECTED_APPLICATION: 'SET_SELECTED_APPLICATION',
	SET_TYPES: 'SET_TYPES'
};

export const DEFAULTS = {
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
