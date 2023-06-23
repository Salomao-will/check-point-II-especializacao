import { TypeResultCard } from "../section-cards/types";

export function Card(props: TypeResultCard){

  const {name, status, image, origin} = props
  return(
    <div>
      <img src={image} alt="" />
      <div>
        <h2>{name}</h2>
        <span>{status}</span>
        <span>{origin.name}</span>
      </div>
    </div>
  )
}
