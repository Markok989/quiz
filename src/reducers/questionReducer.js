import * as types from '../actions/actionTypes';
import initialState from './initialState';

// reducer questionReducer, za update(azuriranje) questiona
export default function questionReducer(state = initialState.questions, action) {
    switch (action.type) {

        // povezuje se sa actionType, 
        // vraca vrednost tako sto izdvaja sve sto je filtrirano kroz state
        case types.UPDATE_QUESTION_SUCCESS:
            return [
                ...state.filter(question => question.id !== action.question.id),
                Object.assign({}, action.question)
            ];

        // vraca state
        default:
            return state;
    }
}