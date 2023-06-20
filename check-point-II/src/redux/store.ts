import { combineReducers, createStore } from "redux";
import { pagesReducers } from "./reducers/reducer";

const reducer = combineReducers({
  pages: pagesReducers,
});

export const appStore = createStore(reducer);
