import {SET_ACTIVATED, ADD_UNIT, SUBTRACT_UNIT, REPLACE_OPTION} from "./ActionTypes";

const setActivated = (isActivated, id) => (
    {
        type: SET_ACTIVATED,
        activated: isActivated,
        id: id
    }
);

const addUnit = (id) => (
    {
        type: ADD_UNIT,
        id: id
    }
);


const subUnit = (id) => (
    {
        type: SUBTRACT_UNIT,
        id: id
    }
);


const replaceOption = (parent_id, alternative_id) => (
    {
        type: REPLACE_OPTION,
        parent_id: parent_id,
        alternative_id: alternative_id
    }
);


export {setActivated, addUnit, subUnit, replaceOption};