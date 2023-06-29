export type TypeResultCharacter = {
  id: number,
  name: string,
  status: string,
  species: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: string[],
  url: string,
}
