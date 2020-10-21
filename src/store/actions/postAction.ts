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
	return async (dispatch: Dispatch) => {
		const response = await axios.get<IPost>(`${blogUrl}/${id}/`);

		dispatch<IFetchSinglePostAction>({
			type: ActionTypes.FETCH_POST,
			payload: response.data,
		});
	};
};
