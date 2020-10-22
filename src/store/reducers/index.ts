import { combineReducers } from 'redux';
import { todosReducer } from '../reducers/todos';
import {
	postReducer,
	categoryReducer,
	searchPostReducer,
} from '../reducers/postReducer';
import { postSingleReducer } from '../reducers/PostSingleReducer';
import { ITodo, IPost, ICategories } from '../actions';

export interface IStoreState {
	todos: ITodo[];
	posts: IPost[];
	singlePost: IPost;
	categories: ICategories[];
	search: string;
}

const rootReducer = combineReducers<IStoreState>({
	todos: todosReducer,
	posts: postReducer,
	singlePost: postSingleReducer,
	categories: categoryReducer,
	search: searchPostReducer,
});

export default rootReducer;
