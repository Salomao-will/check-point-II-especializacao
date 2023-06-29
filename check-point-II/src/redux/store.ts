import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { PagesReducers } from "./reducers/reducer";
import thunk from "redux-thunk";
import { TypeResultCard, TypeResultInfo } from "../components/section-cards/types";
import { TypeResultCharacter } from "../pages/details/type";

export type RootState = {
  cards: {
    cards: TypeResultInfo;
    favs: TypeResultCard[];
    detail: TypeResultCharacter
    // Adicionado detail para pega no store
  };
}
const reducer = combineReducers({
  cards: PagesReducers,
});

export const appStore = legacy_createStore(reducer, applyMiddleware(thunk));
