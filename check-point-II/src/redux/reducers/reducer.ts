import { Action } from "../action-types";

const PAGE_INITIAL = {
  cards: [],
};

// type Action = {
//   type: "ADD_CARDS" | "FAVORITE_CARD";
//   payload?: {
//     card: string;
//   };
// };

export function pagesReducers(state = PAGE_INITIAL, action: Action) {
  switch(action.type){
    case "GET_ALLCARDS": {
      return {
        ...state,
        cards: action.payload
      }
    }
    default: {
      return state;
    }
  }
}
