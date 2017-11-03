import * as types from './actionTypes';


// akcija updateQuestionSuccess
export function updateQuestionSuccess(question) {
    return { type: types.UPDATE_QUESTION_SUCCESS, question };
}
