import { Action } from "../action-types";
import { fetchAllCards } from "./actions";

const PAGE_INITIAL = {
  cards: [],
};

export function PagesReducers(state = PAGE_INITIAL, action: Action) {
  switch(action.type){
    case "GET_ALLCARDS": {
      return {
        ...state,
        cards: action.payload,
      }
    } case "GET_BY_NAME": {
      return{
        ...state,
        cards: action.payload,
      }
    } case "NEXT": {
      return{
        ...state,
        cards: action.payload,
      }
    }case "BACK": {
      return{
        ...state,
        cards: action.payload,
      }
    }case "RESET": {
      return{
        ...state,
        cards: PAGE_INITIAL.cards
      }
    }
    default: {
      return state;
    }
  }
}
