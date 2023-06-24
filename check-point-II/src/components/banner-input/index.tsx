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
    <div className="flex justify-center items-end relative">

      <img className="w-full max-h-96 object-cover" src={imgBanner} alt="Imagem de rick and morty" />

      <div className="flex w-full flex-col px-8  justify-between items-center gap-8 absolute mb-8 md:w-3/4 md:px-0 md:flex-row">
        <input
          className=" w-full py-3 px-4 outline-none border-solid border-black border rounded-lg"
          type="text"
          value={inputName}
          onChange={searchByInputName}
          placeholder="Digite para filtrar"
        />
        <button
          className="flex bg-red-700 py-3 px-8 text-slate-50 rounded-lg border-0"
          >
            Limpar
        </button>
      </div>
    </div>
  )
}
