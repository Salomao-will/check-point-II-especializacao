import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { Card } from "../../components/card"
import { getCardsFavorites } from "../../redux/reducers/actions"
import { TypeResultCard } from "../../components/section-cards/types"

export function Favorites(){

  const dispatch = useDispatch()

  const {favs} = useSelector((store: RootState) => store.cards)

  console.log((favs));

  return(
    <div className="flex flex-col p-16 gap-8">
      <h2 className="text-2xl font-semibold">favoritos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {
          favs.map((card: TypeResultCard) => (
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
    </div>
  )
}
