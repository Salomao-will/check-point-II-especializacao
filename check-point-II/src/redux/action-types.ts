import { TypeResultCard } from "../components/section-cards/types";

export const GET_ALLCARDS = "GET_ALLCARDS";
export const GET_BY_NAME = 'GET_BY_NAME';
export const RESET = 'RESET';
export const NEXT = 'NEXT';
export const BACK = 'BACK';

type ActionGetAll = {
  type: 'GET_ALLCARDS',
  payload: TypeResultCard
};

type ActionGetByName = {
  type: 'GET_BY_NAME',
  payload: TypeResultCard
}

type ActionNextPage = {
  type: 'NEXT',
  payload: TypeResultCard
}

type ActionBackPage = {
  type: 'BACK',
  payload: TypeResultCard
}
type ActionReset = {
  type: 'RESET',
  payload: TypeResultCard
}


export type Action = ActionGetAll | ActionGetByName | ActionNextPage | ActionBackPage | ActionReset  ;
