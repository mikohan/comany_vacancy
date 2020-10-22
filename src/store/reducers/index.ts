import { combineReducers } from 'redux';
import { todosReducer } from '../reducers/todos';
import {
	postReducer,
	categoryReducer,
	searchPostReducer,
	filterCategoryReducer,
} from '../reducers/postReducer';
import { postSingleReducer } from '../reducers/PostSingleReducer';
import { ITodo, IPost, ICategories } from '../actions';

export interface IStoreState {
	todos: ITodo[];
	posts: IPost[];
	singlePost: IPost;
	categories: ICategories[];
	search: string;
	catFilter: number;
}

const rootReducer = combineReducers<IStoreState>({
	todos: todosReducer,
	posts: postReducer,
	singlePost: postSingleReducer,
	categories: categoryReducer,
	search: searchPostReducer,
	catFilter: filterCategoryReducer,
});

export default rootReducer;
