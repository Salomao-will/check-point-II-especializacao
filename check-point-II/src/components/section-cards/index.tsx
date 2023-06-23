import { useDispatch, useSelector } from "react-redux"
import { BannerInput } from "../banner-input"
import { useEffect, useState } from "react"
import { fetchAllCards } from "../../redux/reducers/actions"
import { TypeResultCard } from "./types"
import { Card } from "../card"

export function SectionCards() {

  const dispatch = useDispatch()
  const { cards } = useSelector((store) => store.cards)
  const [page, setPage] = useState(2)

  useEffect(() => {
    dispatch(fetchAllCards(1))
  }, []);

  function getAllCardsByPage() {

    dispatch(fetchAllCards(page))

    setPage(page + 1)

  }

  return (
    <div >
      <BannerInput />
      <h2>Lista de personagens</h2>
      <div>
        <div className="flex flex-wrap justify-around">
          {
            cards.map((card: TypeResultCard) => (
              <Card
                key={card.id}
                name={card.name}
                status={card.status}
                image={card.image}
                origin={card.origin}
              />
            ))
          }
        </div>
        <div className="flex gap-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full border-solid border-black border-2">{page - 1}</span>
          <button
            className="flex"
            onClick={getAllCardsByPage}
          >
            proximo
          </button>
        </div>
      </div>
    </div>
  )
}
