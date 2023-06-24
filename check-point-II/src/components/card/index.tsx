import { TypeResultCard } from "../section-cards/types";

export function Card(props: TypeResultCard) {

  const { name, status, image, origin } = props
  return (
    <div className="border-solid border-black border rounded-lg">
      <img className="w-full rounded-lg h-80 object-cover" src={image} alt="" />
      <div className="py-8 px-4">
        <h2 className=" text-xl font-semibold">{name}</h2>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${status === 'Alive' ? "bg-green-400" : status === 'Dead' ? "bg-red-600" : "bg-gray-500"}`}></div>
            <span>{status}</span>
          </div>
          <span>{origin.name}</span>
        </div>
      </div>
    </div>
  )
}
