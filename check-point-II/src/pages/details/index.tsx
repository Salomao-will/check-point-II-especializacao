import img from '../../assets/rick-and-morty.jpeg';

export function Details() {

  return (
    <div className="p-10">

      <main>

        <h1 className='mb-5 text-4xl'>Nome do personagem</h1>

        <div className="flex justify-start gap-5">
          <img src={img} alt=""
            className="w-80 h-80 "
          />
          <div className=' p-4 flex flex-col gap-2 '>
            <p>Personagem:</p>
            <p>Espécie:</p>
            <p>Status:</p>
            <p>Origem:</p>
            <p>Localização:</p>
            <p>Lista de episódios:</p>
          </div>
        </div>

      </main>
    </div>
  )
}
