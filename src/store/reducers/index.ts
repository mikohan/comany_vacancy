import { combineReducers } from 'redux';
import { todosReducer } from '../reducers/todos';
import { postReducer, categoryReducer } from '../reducers/postReducer';
import { postSingleReducer } from '../reducers/PostSingleReducer';
import { ITodo, IPost, ICategories } from '../actions';

export interface IStoreState {
	todos: ITodo[];
	posts: IPost[];
	singlePost: IPost;
	categories: ICategories[];
}

const rootReducer = combineReducers<IStoreState>({
	todos: todosReducer,
	posts: postReducer,
	singlePost: postSingleReducer,
	categories: categoryReducer,
});

export default rootReducer;
