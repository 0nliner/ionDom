import {combineReducers} from "redux";
import {SetupOptionsReducer} from "../components/SetupOptions/redux/SetupOptionsReducer";


let rootReducer = combineReducers({SetupOptionsReducer});

export {rootReducer};