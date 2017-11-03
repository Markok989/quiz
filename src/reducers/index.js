import { combineReducers } from 'redux';
import answers from './answerReducer';
import questions from './questionReducer';
import quizzes from './quizReducer';


// glavni reducer, sadrzi sve reducere koji se dalje prosledjuju ka Store
const rootReducer = combineReducers({
    answers,
    questions,
    quizzes
});

export default rootReducer;