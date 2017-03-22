export const ACTIONS = {
	GET_APPLICATIONS: 'GET_APPLICATIONS',
	GET_TYPES: 'GET_TYPES',
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
