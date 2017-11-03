import * as types from './actionTypes';
import quizApi from '../api/mockQuizApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';


// akcija za loadQuizzesSuccess
export function loadQuizzesSuccess(quizzes) {
    return { type: types.LOAD_QUIZZES_SUCCESS, quizzes };
}

// akcija za createQuizSuccess
export function createQuizSuccess(quiz) {
    return { type: types.CREATE_QUIZ_SUCCESS, quiz };
}

// akcija za updateQuizSuccess
export function updateQuizSuccess(quiz) {
    return { type: types.UPDATE_QUIZ_SUCCESS, quiz };
}

// ucitavanje kviza, dispatch preko beginAjaxCall poziva iz API getAllQuizzes(sadrzaj API)
export function loadQuiz() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return quizApi.getAllQuizzes().then(quizzes => {
            dispatch(loadQuizzesSuccess(quizzes));
        }).catch(error => {
            throw (error);
        });
    };
}

// ucitavanje kviza, dispatch preko beginAjaxCall poziva iz API saveQuiz(sadrzaj-kostur API) i njegovo novo stanje
export function saveQuiz(quiz) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return quizApi.saveQuiz(quiz).then(quiz => {
            //quiz.id ? dispatch(updateQuizSuccess(quiz)) :
            dispatch(createQuizSuccess(quiz));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw (error);
        });
    };
}
