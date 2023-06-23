import { useState } from "react";
import { useDispatch } from "react-redux"
import { fetchCardsByName } from "../../redux/reducers/actions";

export function BannerInput(){

  const dispatch = useDispatch();

  const [inputName, setInputName] = useState('');

  const searchByInputName = (event) => {
    const inputValue = event.target.value;
    dispatch(fetchCardsByName(inputValue))
    setInputName(inputValue)
  }
  return(
    <div>
      <h2>Busca de card</h2>
      <input
        type="text"
        value={inputName}
        onChange={searchByInputName}
        placeholder="Digite para filtrar"
      />
    </div>
  )
}
