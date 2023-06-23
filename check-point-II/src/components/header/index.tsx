export function Header() {
  return (
    <header className="px-10 w-full h-14 flex items-center justify-between">
      <h2>Rick And Morty Cards</h2>
      <nav className="flex items-center gap-5 ">
        <p>Início</p>
        <p>Favoritos</p>
      </nav>
    </header>
  )
}
