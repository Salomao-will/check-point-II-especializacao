import axios from "axios"
import { GET_ALLCARDS, GET_BY_NAME, NEXT } from "../../action-types"
import { TypeResultCard } from "../../../components/section-cards/types"
import { Dispatch } from "redux"

const getAllCardsAction = (payload: TypeResultCard) => {
  return{
    type: GET_ALLCARDS,
    payload,
  }
}

const getCardsByNameInput = (payload: TypeResultCard) => {
  return {
    type: GET_BY_NAME,
    payload,
  }
}

const getCardsNextPage = (payload: TypeResultCard) => {
  return {
    type: NEXT,
    payload,
  }
}

const getCardsBackPage = (payload: TypeResultCard) => {
  return {
    type: NEXT,
    payload,
  }
}

export const fetchAllCards = (page:number) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    )
    dispatch(getAllCardsAction(response.data))
  }
}

export const fetchCardsByName = (name:string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    )
    dispatch(getCardsByNameInput(response.data))
  }
}

export const fetchNextPage = (url:string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(
      url
    )
    dispatch(getCardsNextPage(response.data))
  }
}

export const fetchBackPage = (url:string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(
      url
    )
    dispatch(getCardsBackPage(response.data))
  }
}
