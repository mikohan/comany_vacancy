import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './actionTypes';

import { blogUrl } from '../../config';

export interface ICategories {
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
export interface IFetchCategoryAction {
	type: ActionTypes.FETCH_CATEGORY;
	payload: ICategories[];
}

export const fetchPosts = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<IServerResponse>(`${blogUrl}/`);
		const res = await response.data.results;
		// const categories: any = [];
		const categories: any = res.map((cat: IPost): any => {
			return cat.categories;
		});

		const result: any = Array.from(
			new Set(categories.flat().map((s: any) => s.id))
		).map((id: any) => {
			return {
				id: id,
				name: categories.flat().find((s: any) => s.id === id).name,
			};
		});

		dispatch<IFetchPostAction>({
			type: ActionTypes.FETCH_POSTS,
			payload: res,
		});

		dispatch<IFetchCategoryAction>({
			type: ActionTypes.FETCH_CATEGORY,
			payload: result,
		});
	};
};

export interface ISearchPostAction {
	type: ActionTypes.SEARCH_POST;
	payload: string;
}

export interface IFilterCategoryAction {
	type: ActionTypes.FILTER_CATEGORY;
	payload: number;
}

export const filterPosts = (search: string) => {
	return async (dispatch: Dispatch) => {
		dispatch<ISearchPostAction>({
			type: ActionTypes.SEARCH_POST,
			payload: search,
		});
	};
};

export const filterPostsCategories = (id: number) => {
	return async (dispatch: Dispatch) => {
		dispatch<IFilterCategoryAction>({
			type: ActionTypes.FILTER_CATEGORY,
			payload: id,
		});
	};
};
