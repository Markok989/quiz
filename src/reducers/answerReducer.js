import * as type from '../actions/actionTypes';
import initialState from './initialState';


// reducer koji pod akcijom UPDATE_ANSWER_SUCCESS vrsi update sanja,
// stanje se filtrira, posto state ne moze da se menja, klonira se novi state koji dobija novi sadrzaj (vezan za odabranu akciku),
// i vraca novo kreiran state kao rezultat
export default function answerRedcuer(state = initialState.answers, action) {
    switch (action.type) {
        case type.UPDATE_ANSWER_SUCCESS:
            return [
                ...state.filter(answer => answer.id !== action.answer.id),
                Object.assign({}, action.answer)
            ];

        default: return state;
    }
}