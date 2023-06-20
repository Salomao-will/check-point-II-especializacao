const PAGE_INITIAL = {
  pages: [],
};

type Action = {
  type: "ADD_CARDS" | "FAVORITE_CARD";
  payload?: {
    card: string;
  };
};

export function pagesReducers(state = PAGE_INITIAL, action: Action) {
  if (action.type === "ADD_CARDS") {
    return {
      ...state,
      card: state.pages,
    };
  }
  return state;
}
