import axios from "axios";
import {
  BACK,
  FAV,
  GET_ALLCARDS,
  GET_BY_NAME,
  NEXT,
  DETAILS,
} from "../../action-types";
import { TypeResultCard } from "../../../components/section-cards/types";
import { Dispatch } from "redux";
import { TypeResultCharacter } from "../../../pages/details/type";

/**
 * Action creator para obter todos personagens que estão na api
 * @param payload
 * @returns objeto para a action com o type e o payload.
 */

const getAllCardsAction = (payload: TypeResultCard) => {
  return {
    type: GET_ALLCARDS,
    payload,
  };
};

/**
 * Action creator para obter o personagem pelo ID
 * @param payload
 * @returns objeto para a action com o type e o payload.
 */

const getCardsByNameInput = (payload: TypeResultCard) => {
  return {
    type: GET_BY_NAME,
    payload,
  };
};

/**
 * Action creator para paginação, para retornar os dados da proxima pagina
 * @param payload
 * @returns objeto para a action com o type e o payload.
 */


const getCardsNextPage = (payload: TypeResultCard) => {
  return {
    type: NEXT,
    payload,
  };
};

/**
 * Action creator para paginação, para retornar os dados da pagina anterior
 * @param payload
 * @returns objeto para a action com o type e o payload.
 */

const getCardsBackPage = (payload: TypeResultCard) => {
  return {
    type: BACK,
    payload,
  };
};

/**
 * Action creator para favoritar os cards, adicionando ao Array favs[]
 * @param payload
 * @returns objeto para a action com o type e o payload.
 */

export const getCardsFavorites = (payload: TypeResultCard) => {
  return {
    type: FAV,
    payload,
  };
};

/**
 * Action creator para obter os detalhes no personagem seelcionado pelo id
 * @param payload
 * @returns objeto para a action com o type e o payload.
 */

export const getPageDetails = (payload: TypeResultCharacter) => {
  return {
    type: DETAILS,
    payload,
  };
};

export const fetchAllCards = (page: number) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    dispatch(getAllCardsAction(response.data));
  };
};

export const fetchCardsByName = (name: string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    dispatch(getCardsByNameInput(response.data));
  };
};

export const fetchNextPage = (url: string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);
    dispatch(getCardsNextPage(response.data));
  };
};

export const fetchBackPage = (url: string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);
    dispatch(getCardsBackPage(response.data));
  };
};

export const fetchSingleCharacter = (id: number) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    dispatch(getPageDetails(response.data));
  };
};
