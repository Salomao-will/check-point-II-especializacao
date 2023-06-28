import { TypeResultCard } from "../../components/section-cards/types";
import { Action } from "../action-types";

const PAGE_INITIAL = {
  cards: [],
  favs: JSON.parse(localStorage.getItem('favs') || '[]'),
};

export function PagesReducers(state = PAGE_INITIAL, action: Action) {
  switch(action.type){
    // case "GET_ALLCARDS": {
    //   return {
    //     ...state,
    //     cards: action.payload
    //   }

      case 'GET_ALLCARDS': {
        const { payload } = action;
        const updatedCards = payload.results.map((card:TypeResultCard) => {
          const isFav = state.favs.some((fav:TypeResultCard) => fav.id === card.id);
          return { ...card, isFav};

        });

        return {
          ...state,
          cards: {
            results: updatedCards,
            info: payload.info
          },
        };
    } case "GET_BY_NAME": {
      const { payload } = action;
        const updatedCards = payload.results.map((card:TypeResultCard) => {
          const isFav = state.favs.some((fav:TypeResultCard) => fav.id === card.id);
          return { ...card, isFav};

        });

        return {
          ...state,
          cards: {
            results: updatedCards,
            info: payload.info
          },
        };
    } case "NEXT": {
      const { payload } = action;
        const updatedCards = payload.results.map((card:TypeResultCard) => {
          const isFav = state.favs.some((fav:TypeResultCard) => fav.id === card.id);
          return { ...card, isFav};

        });

        return {
          ...state,
          cards: {
            results: updatedCards,
            info: payload.info
          },
        };
    }case "BACK": {
      const { payload } = action;
        const updatedCards = payload.results.map((card:TypeResultCard) => {
          const isFav = state.favs.some((fav:TypeResultCard) => fav.id === card.id);
          return { ...card, isFav};

        });

        return {
          ...state,
          cards: {
            results: updatedCards,
            info: payload.info
          },
        };
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
      localStorage.setItem('favs', JSON.stringify(updatedFavs));

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
