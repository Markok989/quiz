import * as types from '../actions/actionTypes';
import initialState from './initialState';


// quizReducer
export default function quizReducer(state = initialState.quizzes, action) {
    switch (action.type) {
        // reducer za ucitavanje quizzes
        case types.LOAD_QUIZZES_SUCCESS:
            return action.quizzes;

        //reducer za kreiranje quiz-a
        case types.CREATE_QUIZ_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.quiz)
            ];

        // reducer za azuriranje quiz-a
        case types.UPDATE_QUIZ_SUCCESS:
            return [
                ...state.filter(quiz => quiz.id !== action.quiz.id),
                Object.assign({}, action.quiz)
            ];

        default:
            return state;
    }
}
