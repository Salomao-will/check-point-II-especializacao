import axios from "axios";

export const getPages = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});
