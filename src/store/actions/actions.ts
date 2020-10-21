import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './actionTypes';

import { url, blogUrl } from '../../config';

export interface ITodo {
	id: number;
	title: string;
	completed: boolean;
}

interface ICategories {
	id: number;
	name: string;
}

interface IServerResponse {
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

export interface IFetchTodosAction {
	type: ActionTypes.FETCH_TODOS;
	payload: ITodo[];
}

export const fetchTodos = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<ITodo[]>(url);

		dispatch<IFetchTodosAction>({
			type: ActionTypes.FETCH_TODOS,
			payload: response.data,
		});
	};
};

export const fetchPosts = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<IServerResponse>(blogUrl);
		const res = await response.data.results;

		dispatch<IFetchPostAction>({
			type: ActionTypes.FETCH_POSTS,
			payload: res,
		});
	};
};
