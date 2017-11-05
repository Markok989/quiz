import * as types from './actionTypes';

// akdcija koja vrsi update answer-a
export function updateAnswerSuccess(answer) {
    return { types: types.UPDATE_ANSWER_SUCCESS, answer };
}
