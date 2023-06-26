import { applyMiddleware, combineReducers, createStore, legacy_createStore } from "redux";
import { PagesReducers } from "./reducers/reducer";
import thunk from "redux-thunk";
import { TypeResultCard, TypeResultInfo } from "../components/section-cards/types";
import { fetchAllCards } from "./reducers/actions";

export type RootState = {
  cards: {
    cards: TypeResultInfo;
    favs: TypeResultCard[]
  };
}
const reducer = combineReducers({
  cards: PagesReducers,
});

export const appStore = legacy_createStore(reducer, applyMiddleware(thunk));
appStore.dispatch(fetchAllCards(1));
