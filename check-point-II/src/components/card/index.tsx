import { TypeResultCard } from "../section-cards/types";

export function Card(props: TypeResultCard) {

  const { name, status, image, origin } = props
  return (
    <div className="border-solid border-black border rounded-lg mb-5">
      <img className="rounded-lg" src={image} alt="" />
      <div>
        <h2>{name}</h2>
        <span>{status}</span>
        <span>{origin.name}</span>
      </div>
    </div>
  )
}
