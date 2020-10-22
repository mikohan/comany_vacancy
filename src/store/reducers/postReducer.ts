import { IPost, IFetchPostAction } from '../actions';
import { ActionTypes } from '../actions/actionTypes';
import { ICategories, IFetchCategoryAction } from '../actions/posts';

export const postReducer = (state: IPost[] = [], action: IFetchPostAction) => {
	switch (action.type) {
		case ActionTypes.FETCH_POSTS:
			return action.payload;
		default:
			return state;
	}
};

export const categoryReducer = (
	state: ICategories[] = [],
	action: IFetchCategoryAction
) => {
	switch (action.type) {
		case ActionTypes.FETCH_CATEGORY:
			return action.payload;
		default:
			return state;
	}
};
