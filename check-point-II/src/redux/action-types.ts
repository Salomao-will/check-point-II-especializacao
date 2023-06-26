import { TypeResultCard } from "../components/section-cards/types";

export const GET_ALLCARDS = "GET_ALLCARDS";
export const GET_BY_NAME = 'GET_BY_NAME';
export const RESET = 'RESET';
export const NEXT = 'NEXT';
export const BACK = 'BACK';
export const FAV = 'FAV';

type ActionGetAll = {
  type: 'GET_ALLCARDS',
  payload: {
    results: [];
    info: {}
  }
};

type ActionGetByName = {
  type: 'GET_BY_NAME',
  payload: {
    results: [];
    info: {}
  }
}

type ActionNextPage = {
  type: 'NEXT',
  payload: {
    results: [];
    info: {}
  }
}

type ActionBackPage = {
  type: 'BACK',
  payload: {
    results: [];
    info: {}
  }
}
type ActionReset = {
  type: 'RESET',
  payload: TypeResultCard
}
type ActionFavorites = {
  type: 'FAV',
  payload: TypeResultCard
}


export type Action = ActionGetAll | ActionGetByName | ActionNextPage | ActionBackPage | ActionReset | ActionFavorites  ;
