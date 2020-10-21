import { IPost, IFetchPostAction } from '../actions';
import { ActionTypes } from '../actions/actionTypes';

export const postReducer = (state: IPost[] = [], action: IFetchPostAction) => {
	switch (action.type) {
		case ActionTypes.FETCH_POSTS:
			return action.payload;
		default:
			return state;
	}
};
