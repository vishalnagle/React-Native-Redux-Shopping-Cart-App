const { createStore, combineReducers } = require("redux");
import { Reducers } from "../reducer/Reducers";
import { ThemeReducers } from "../reducer/ThemeReducer";
import { LanguageReducer } from "../reducer/LanguageReducer";
const totalReducers = combineReducers({Reducers, ThemeReducers, LanguageReducer});
export const myStore = createStore(totalReducers)