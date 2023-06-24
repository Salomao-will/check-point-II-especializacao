export function Header() {
  return (
    <header className=" px-16 py-8 w-full flex items-center justify-between">
      <h2 className=" text-xl font-bold md:text-3xl">Rick And Morty Cards</h2>
      <nav className="flex items-center gap-5 ">
        <p>Início</p>
        <p>Favoritos</p>
      </nav>
    </header>
  )
}
