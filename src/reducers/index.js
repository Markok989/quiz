import { combineReducers } from 'redux';
import answers from './answerReducer';


// glavni reducer, sadrzi sve reducere koji se dalje prosledjuju ka Store
const rootReducer = combineReducers({
    answers
});

export default rootReducer;