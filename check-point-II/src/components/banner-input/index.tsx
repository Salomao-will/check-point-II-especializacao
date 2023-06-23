import { useState } from "react";
import { useDispatch } from "react-redux"
import { fetchCardsByName } from "../../redux/reducers/actions";
import imgBanner from '../../assets/rick-and-morty.jpeg'

export function BannerInput() {

  const dispatch = useDispatch();

  const [inputName, setInputName] = useState('');

  const searchByInputName = (event) => {
    const inputValue = event.target.value;
    dispatch(fetchCardsByName(inputValue))
    setInputName(inputValue)
  }
  return (
    <div className="">

      <img className="w-full h-72" src={imgBanner} alt="Imagem de rick and morty" />

      <div className="absolute top-64 left-96">
        <input
          className="w-96 h-10 outline-none border-solid border-black border rounded-lg mr-3 p-1"
          type="text"
          value={inputName}
          onChange={searchByInputName}
          placeholder="Digite para filtrar"
        />
        <button className="bg-red-700 text-slate-50 w-32 h-10 rounded-lg border-0">Limpar Filtro</button>
      </div>
    </div>
  )
}
