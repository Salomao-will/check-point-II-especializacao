export const GET_ALLCARDS = "GET_ALLCARDS";
export const GET_BY_NAME = 'GET_BY_NAME';
export const NEXT = 'NEXT';
export const BACK = 'BACK';

type ActionGetAll = {
  type: 'GET_ALLCARDS',
  payload: ""
};

type ActionGetByName = {
  type: 'GET_BY_NAME',
  payload: ""
}

type ActionNextPage = {
  type: 'NEXT',
  payload: ""
}

type ActionBackPage = {
  type: 'BACK',
  payload: ""
}


export type Action = ActionGetAll | ActionGetByName | ActionNextPage | ActionBackPage  ;
