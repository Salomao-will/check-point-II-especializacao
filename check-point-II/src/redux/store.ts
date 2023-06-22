import { applyMiddleware, combineReducers, createStore, legacy_createStore } from "redux";
import { pagesReducers } from "./reducers/reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  cards: pagesReducers,
});

export const appStore = legacy_createStore(reducer, applyMiddleware(thunk));
