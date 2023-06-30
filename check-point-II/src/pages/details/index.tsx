import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export function Details() {

  const { detail } = useSelector((store: RootState) => store.cards)

  return (
    <div className="p-10">

      <main>

        <h1 className='mb-5 text-4xl'>{detail.name}</h1>

        <div className="flex justify-start gap-5 border-solid border-black border rounded-lg shadow-slate-700">
          <img src={detail.image} alt=""
            className="w-80 h-80 rounded-s-lg"
          />
          <div className=' p-4 flex flex-col gap-2 '>
            <strong>Personagem: <span className='text-slate-400'>{detail.name}</span></strong>
            <strong>Espécie: <span className='text-slate-400'>{detail.species}</span></strong>
            <strong>Status: <span className='text-slate-400'>{detail.status}</span></strong>
            <strong>Origem: <span className='text-slate-400'>{detail.origin?.name}</span></strong>
            <strong>Localização: <span className='text-slate-400'>{detail.location?.name}</span></strong>
            <ul className='w-96 h-24 flex flex-wrap'><strong>Lista de episódios:</strong> {detail?.episode?.map((list: string) => {
              const id = list.split('/').slice(-1)[0];
              return <li className='list-none mr-1 ml-2 text-slate-400 font-bold' key={id}>{`${id}`}</li>
            })}</ul>
          </div>
        </div>

      </main>
    </div>
  )
}
