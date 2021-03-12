import {ADD_UNIT, REPLACE_OPTION, SET_ACTIVATED, SUBTRACT_UNIT} from "./ActionTypes";


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
                    2
                ]
        },

        {
            id: 2,
            title: "Установка windows 15000 ultra pro nano giga edition delux.",
            price_for_unit: 333,

            count: 2,  // кол-во единиц
            activated: false,    // выбрана ли данная опция

            replace_available_ids:  // id альтернатив этой опции
                [
                    1
                ]
        }
    ]
};


function SetupOptionsReducer (state=INITIAL_STATE, action) {
    let updated_options = [];
    let options_copy = [...state.options];

    switch (action.type) {

        case SET_ACTIVATED:
            for (let option of state.options) {
                let option_copy = option;
                if (option.id === action.id) {
                    option_copy.activated = action.activated;
                }
                updated_options = updated_options.concat(option_copy);
            }
            return {...state, options: updated_options};

        case SUBTRACT_UNIT:
            for (let [i, el] of options_copy.entries()) {
                if (el.id === action.id && el.count > 0) {
                    options_copy[i].count = state.options[i].count - 1;
                    return {...state, options: options_copy};
                }
            }
            return {...state, options: options_copy};


        case ADD_UNIT:
            for (let [i, el] of options_copy.entries()) {
                if (el.id === action.id) {
                    options_copy[i].count = state.options[i].count + 1;
                    return {...state, options: options_copy};
                }
            }
            return {...state, options: options_copy};

        case REPLACE_OPTION:
            // заменяем выделееную опцию на указанную альтернативную

            for (let [i, option] of options_copy.entries()) {
                if (option.id === action.parent_id) {
                    option.activated = false;
                }

                else if (option.id === action.alternative_id) {
                    option.activated = true;
                }

            }

            return {...state, options: options_copy};


        default:
            return state
    }
}

export {SetupOptionsReducer};
