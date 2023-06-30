import { useState } from "react";
import { useDispatch } from "react-redux"
import { fetchAllCards, fetchCardsByName} from "../../redux/reducers/actions";
import imgBanner from '../../assets/rick-and-morty.jpeg'

export function BannerInput({onReset}) {

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
          className=" w-full py-3 px-4 outline-none font-roboto text-xl text-fontColor border-solid border-2 border-primary rounded-lg placeholder:text-fontColor placeholder:opacity-50"
          type="text"
          value={inputName}
          onChange={searchByInputName}
          placeholder="Procure por um personagem"
        />
        <button
          className="flex bg-buttonBg py-3  px-8 font-roboto text-secundary text-xl font-normal rounded-lg border-0"
          onClick={()=> {
            dispatch(fetchAllCards(1))
            setInputName('')
            onReset()
          }}
          >
            Limpar
        </button>
      </div>
    </div>
  )
}
