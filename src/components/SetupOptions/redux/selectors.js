import {createSelector} from "reselect";

const selectElements = createSelector(
    // возвращает все опции
    state => state.SetupOptionsReducer.options,
    options => options
);

// const selectObjectsFromIds () {
//
// }

const canBeAddedElements = createSelector(
    state => state.SetupOptionsReducer.options,
    options => {
        // выбираем все неактивные опции,
        // исключая опции на которые ссылаются
        // при помощи replace_available_ids

        let can_be_added_ids = [];
        for (let el of options) {
            if (!el.activated) {
                for (let id of el.replace_available_ids) {
                    if ( !can_be_added_ids.includes(id)) {
                        can_be_added_ids = can_be_added_ids.concat(id);
                    }
                }
            }
        }

        let can_be_added = [];
        for (let id of can_be_added_ids) {
            let uniq_element = options.find(el => el.id === id);
            can_be_added = can_be_added.concat(uniq_element);
        }
        return can_be_added;
    }
)


const selectedOptions = createSelector(
    state => state.SetupOptionsReducer.options,
    options => options.filter(el=>el.activated)
);

const optionAlternative = (id) =>
    // возвращает replace_available_ids по id опции
    createSelector(
    state => state.SetupOptionsReducer.options,
    options => {
        return options.find(el=>el.id === id).replace_available_ids
    }
);


const selectOption = (id) =>
    // возвращает данные опции
    createSelector(
        state => state.SetupOptionsReducer.options,
        options => {
            return options.find(el=>el.id === id)
        }
    );

export {selectElements, canBeAddedElements, selectedOptions, optionAlternative, selectOption};
