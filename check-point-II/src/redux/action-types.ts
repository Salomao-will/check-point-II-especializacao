import {
  TypeResultCard,
  TypeResultInfo,
} from "../components/section-cards/types";

export const GET_ALLCARDS = "GET_ALLCARDS";
export const GET_BY_NAME = "GET_BY_NAME";
export const RESET = "RESET";
export const NEXT = "NEXT";
export const BACK = "BACK";
export const FAV = "FAV";
export const DETAILS = "DETAILS";

type ActionGetAll = {
  type: "GET_ALLCARDS";
  payload: {
    results: TypeResultCard[];
    info: TypeResultInfo;
  };
};

type ActionGetByName = {
  type: "GET_BY_NAME";
  payload: {
    results: TypeResultCard[];
    info: TypeResultInfo;
  };
};

type ActionNextPage = {
  type: "NEXT";
  payload: {
    results: TypeResultCard[];
    info: TypeResultInfo;
  };
};

type ActionBackPage = {
  type: "BACK";
  payload: {
    results: TypeResultCard[];
    info: TypeResultInfo;
  };
};
type ActionReset = {
  type: "RESET";
  payload: TypeResultCard;
};
type ActionFavorites = {
  type: "FAV";
  payload: TypeResultCard;
};

type ActionDetails = {
  type: "DETAILS";
  payload: TypeResultCard;
};

export type Action =
  | ActionGetAll
  | ActionGetByName
  | ActionNextPage
  | ActionBackPage
  | ActionReset
  | ActionFavorites
  | ActionDetails;
