export const GET_ALLCARDS = "GET_ALLCARDS";
export const GET_BY_NAME = 'GET_BY_NAME';

type ActionGetAll = {
  type: 'GET_ALLCARDS',
  payload: ""
};

type ActionGetByName = {
  type: 'GET_BY_NAME',
  payload: ""
}


export type Action = ActionGetAll | ActionGetByName;
