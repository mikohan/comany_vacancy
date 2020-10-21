import { combineReducers } from 'redux';
import { todosReducer } from '../reducers/todos';
import { postReducer } from '../reducers/postReducer';
import { ITodo, IPost } from '../actions/actions';

export interface IStoreState {
	todos: ITodo[];
	posts: IPost[];
}

const rootReducer = combineReducers<IStoreState>({
	todos: todosReducer,
	posts: postReducer,
});

export default rootReducer;
