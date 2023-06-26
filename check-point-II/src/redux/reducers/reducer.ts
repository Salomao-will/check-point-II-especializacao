import { TypeResultCard } from "../../components/section-cards/types";
import { Action } from "../action-types";

const PAGE_INITIAL = {
  cards: [],
  favs:[]
};

export function PagesReducers(state = PAGE_INITIAL, action: Action) {
  switch(action.type){
    case "GET_ALLCARDS": {
      return {
        ...state,
        cards: action.payload
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
    case 'FAV': {
      const { payload } = action;
      const isFav = state.favs.some((fav: TypeResultCard) => fav.id === payload.id);
      let updatedFavs;

      if (isFav) {
        updatedFavs = state.favs.filter((fav:TypeResultCard) => fav.id !== payload.id);
      } else {
        updatedFavs = [...state.favs, payload];
      }

      return {
        ...state,
        favs: updatedFavs,
      };
    }
    default: {
      return state;
    }
  }
}
