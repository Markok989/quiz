import { combineReducers } from 'redux';
import answers from './answerReducer';
import questions from './questionReducer';
import quizzes from './quizReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

// glavni reducer, sadrzi sve reducere koji se dalje prosledjuju ka Store
const rootReducer = combineReducers({
    answers,
    questions,
    quizzes,
    ajaxCallsInProgress
});

export default rootReducer;