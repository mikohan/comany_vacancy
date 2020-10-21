import { ITodo, IFetchTodosAction } from '../actions/actions';
import { ActionTypes } from '../actions/actionTypes';

export const todosReducer = (
	state: ITodo[] = [],
	action: IFetchTodosAction
) => {
	switch (action.type) {
		case ActionTypes.FETCH_TODOS:
			return action.payload;
		default:
			return state;
	}
};
