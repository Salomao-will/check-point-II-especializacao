export type TypeResultCard = {
  id?: number,
  name: string,
  status: string,
  image: string,
  origin: {
    name: string,
    url: string,
  }
  isFav: boolean,
  onFav: () => void,
};

export type TypeResultInfo = {
  results:[],
  info: {}
}
