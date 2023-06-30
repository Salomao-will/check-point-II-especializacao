import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className=" px-16 py-8 w-full flex items-center justify-between border-b-2 border-grayColor">
      <h2 className=" text-xl font-roboto text-fontColor font-bold md:text-3xl">Rick And Morty Cards</h2>
      <nav className="flex items-center gap-5 ">
        <Link to={"/"} className=" text-xl font-roboto text-fontColor font-semibold cursor-pointer duration-500 hover:text-hoverText">Início</Link>
        <Link to={"/favoritos"} className=" text-xl font-roboto text-fontColor font-semibold cursor-pointer duration-500 hover:text-hoverText">Favoritos</Link>
      </nav>
    </header>
  )
}
