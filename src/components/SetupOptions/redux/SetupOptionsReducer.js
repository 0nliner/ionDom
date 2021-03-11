import {ADD_UNIT, SET_ACTIVATED, SUBTRACT_UNIT} from "./ActionTypes";

const INITIAL_STATE = {
    options: [
        {
            id: 1,
            title: "Установка камеры",
            price_for_unit: 1000,

            count: 12,  // кол-во единиц
            activated: true,    // выбрана ли данная опция

            replace_available_ids:  // id альтернатив этой опции
                [

                ]
        }
    ]
};


function SetupOptionsReducer (state=INITIAL_STATE, action) {
    switch (action.type) {
        case SET_ACTIVATED:
            for (let option of state.options) {
                if (option.id === action.id) {
                    option.activated = action.activated
                }
            }
            return state;

        case SUBTRACT_UNIT:
            for (let [i, el] of state.options.entries()) {
                if (el.id === action.id && el.count > 0) {
                    state.options[i].count -= 1;
                    return state;
                }
            }
            return state;


        case ADD_UNIT:
            for (let [i, el] of state.options.entries()) {
                if (el.id === action.id) {
                    state.options[i].count += 1;
                    return state;
                }
            }
            return state;

        default:
            return state
    }
}

export {SetupOptionsReducer};
