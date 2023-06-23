import axios from "axios"
import { GET_ALLCARDS, GET_BY_NAME } from "../../action-types"
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

export const fetchAllCards = (page:number) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    )
    dispatch(getAllCardsAction(response.data.results))
  }
}

export const fetchCardsByName = (name:string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    )
    dispatch(getCardsByNameInput(response.data.results))
  }
}
