import { combineReducers } from 'redux';
import { todosReducer } from '../reducers/todos';
import { postReducer } from '../reducers/postReducer';
import { postSingleReducer } from '../reducers/PostSingleReducer';
import { ITodo, IPost } from '../actions';

export interface IStoreState {
	todos: ITodo[];
	posts: IPost[];
	singlePost: IPost;
}

const rootReducer = combineReducers<IStoreState>({
	todos: todosReducer,
	posts: postReducer,
	singlePost: postSingleReducer,
});

export default rootReducer;
