import { useDispatch, useSelector } from "react-redux"
import { BannerInput } from "../banner-input"
import { useEffect, useState } from "react"
import { fetchAllCards, fetchBackPage, fetchNextPage, getCardsFavorites } from "../../redux/reducers/actions"
import { TypeResultCard } from "./types"
import { Card } from "../card"
import { RootState } from "../../redux/store"

export function SectionCards() {

  const dispatch = useDispatch()
  const { cards, favs} = useSelector((store: RootState) => store.cards)
  const [page, setPage] = useState(1)


  const resetPage = () =>{
    setPage(1)
  }

  useEffect(() => {
    dispatch(fetchAllCards(page))
  }, [favs, page])

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [page])


  return (
    <div>
      <BannerInput
        onReset={resetPage}
      />
      <div className="flex flex-col p-16 gap-8">
        <h2 className=" text-2xl font-semibold">Lista de personagens</h2>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {
              cards?.results?.map((card: TypeResultCard) => (
                <Card
                  key={card.id}
                  name={card.name}
                  status={card.status}
                  image={card.image}
                  origin={card.origin}
                  isFav={card.isFav}
                  onFav={() => dispatch(getCardsFavorites({...card, isFav: !card.isFav}))}
                />
              ))
            }
          </div>
          <div className="flex gap-2 items-center self-center">
            <button
                className="flex disabled:text-gray-300"
                onClick={() => {
                  setPage((old) => old - 1)
                  dispatch(fetchBackPage(cards.info.prev))
                }}
                disabled={page <= 1}
              >
                Anterior
            </button>
            <span
              className="flex items-center justify-center w-8 h-8 rounded-full border-solid border-black border-2"
              >
                {page}
            </span>
            <button
              className="flex"
              onClick={() => {
                setPage((old) => old + 1)
                dispatch(fetchNextPage(cards.info.next))
              }}
            >
              proximo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
