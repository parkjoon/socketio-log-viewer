import actions from '../utils/actions';

export function setJobPosts(jobPosts) {
	return {
		type: actions.SET_JOB_POSTS,
		jobPosts
	};
}
