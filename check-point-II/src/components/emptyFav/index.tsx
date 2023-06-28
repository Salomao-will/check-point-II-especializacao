import { Link } from 'react-router-dom';
import imgEmpty from '../../assets/image-full.png';

export function Empty(){
  return(
    <div className=' self-center'>
      <div className='flex flex-col items-center gap-4'>
        <img src={imgEmpty} alt="" />
        <p className=' text-xl font-normal text-black'>Você ainda não possui nenhum card favorito!!!</p>
        <Link className=' text-xl font-semibold text-black' to={"/"}>Clique e seus favoritos.</Link>
      </div>
    </div>
  )
}
