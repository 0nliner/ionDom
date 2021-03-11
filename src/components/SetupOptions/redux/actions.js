import {SET_ACTIVATED, ADD_UNIT, SUBTRACT_UNIT} from "./ActionTypes";

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


export {setActivated, addUnit, subUnit};