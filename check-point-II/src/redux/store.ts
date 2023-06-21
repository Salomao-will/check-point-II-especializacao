import { combineReducers, legacy_createStore } from "redux";
import { pagesReducers } from "./reducers/reducer";

const reducer = combineReducers({
  pages: pagesReducers,
});

export const appStore = legacy_createStore(reducer);
