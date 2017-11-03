import * as types from '../actions/actionTypes';
import initialState from './initialState';

// reducer questionReducer, 
export default function questionReducer(state = initialState.questions, action) {
    switch (action.type) {

        case types.UPDATE_QUESTION_SUCCESS:
            return [
                ...state.filter(question => question.id !== action.question.id),
                Object.assign({}, action.question)
            ];

        default:
            return state;
    }
}
