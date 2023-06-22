import axios from "axios"
import { GET_ALLCARDS } from "../../action-types"

const getAllCardsAction = (payload) => {
  return{
    type: GET_ALLCARDS,
    payload,
  }
}

export const fetchAllCards = (page:number) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    )
    dispatch(getAllCardsAction(response.data.results))
  }
}
