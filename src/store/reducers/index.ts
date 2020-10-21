import { combineReducers } from 'redux';
import { todosReducer } from '../reducers/todos';
import { ITodo } from '../actions/actions';

export interface IStoreState {
	todos: ITodo[];
}

const rootReducer = combineReducers<IStoreState>({
	todos: todosReducer,
});

export default rootReducer;
