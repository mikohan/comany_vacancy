import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './actionTypes';

import { blogUrl } from '../../config';

import { IPost } from './posts';

export interface IFetchSinglePostAction {
	type: ActionTypes.FETCH_POST;
	payload: IPost;
}

export const fetchPost = (id: string) => {
	return async (dispatch: Dispatch, getState: any) => {
		let post: IPost;
		if (!getState || getState().posts.length === 0) {
			const response = await axios.get<IPost>(`${blogUrl}/${id}/`);
			post = response.data;
		} else {
			post = getState().posts.find((post: IPost) => +post.id === +id);
		}

		dispatch<IFetchSinglePostAction>({
			type: ActionTypes.FETCH_POST,
			payload: post,
		});
	};
};
