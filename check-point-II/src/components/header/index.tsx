import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className=" px-16 py-8 w-full flex items-center justify-between">
      <h2 className=" text-xl font-bold md:text-3xl">Rick And Morty Cards</h2>
      <nav className="flex items-center gap-5 ">
        <Link to={"/"} className=" text-xl font-medium cursor-pointer hover:text-orange-400">Início</Link>
        <Link to={"/favoritos"} className=" text-xl font-medium cursor-pointer hover:text-orange-400">Favoritos</Link>
      </nav>
    </header>
  )
}
