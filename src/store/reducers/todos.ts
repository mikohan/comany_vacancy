import { ITodo, FetchTodosAction } from '../actions/actions';
import { ActionTypes } from '../actions/actionTypes';

export const todosReducer = (state: ITodo[] = [], action: FetchTodosAction) => {
	switch (action.type) {
		case ActionTypes.FETCH_TODOS:
			return action.payload;
		default:
			return state;
	}
};
