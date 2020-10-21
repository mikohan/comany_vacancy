import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './actionTypes';

import { blogUrl } from '../../config';

interface ICategories {
	id: number;
	name: string;
}

export interface IServerResponse {
	count: 6;
	next: string | null;
	previous: string | null;
	results: IPost[];
}

export interface IPost {
	id: number;
	title: string;
	text: string;
	image: string;
	date: string;
	slug: string;
	author: string;
	categories: ICategories[];
}

export interface IFetchPostAction {
	type: ActionTypes.FETCH_POSTS;
	payload: IPost[];
}

export const fetchPosts = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<IServerResponse>(`${blogUrl}/`);
		const res = await response.data.results;

		dispatch<IFetchPostAction>({
			type: ActionTypes.FETCH_POSTS,
			payload: res,
		});
	};
};
