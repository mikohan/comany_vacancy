import { IPost, IFetchSinglePostAction } from '../actions';
import { ActionTypes } from '../actions/actionTypes';

export const postSingleReducer = (
	state: IPost = {
		id: 1,
		title: '',
		text: '',
		image: '',
		date: '',
		slug: '',
		author: '',
		categories: [],
	},
	action: IFetchSinglePostAction
) => {
	switch (action.type) {
		case ActionTypes.FETCH_POST:
			return action.payload;
		default:
			return state;
	}
};
