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
  onDetail: () => void
};

export type TypeResultInfo = {
  results:[],
  info: {}
}
