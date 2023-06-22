import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { fetchAllCards } from "./redux/reducers/actions";

function App() {

  // const appRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <h1 className='text-slate-950'>Hello World</h1>
  //   }
  // ])

  // return (
  //   <>
  //     <RouterProvider router={appRouter} />
  //   </>
  // )

  const dispatch = useDispatch()
  const {cards} = useSelector((store) => store.cards)
  const [ page, setPage] = useState(2)

  useEffect(() => {
    dispatch(fetchAllCards(1))
  }, []);

  console.log(page)

  function getAllCardsByPage() {

    dispatch(fetchAllCards(page))

    setPage(page + 1)

  }

  return (
    <>
    <button onClick={getAllCardsByPage}>proximo</button>
    {
      cards.map((card) => (
        <p key={card.id}>{card.name}</p>
      ))
    }
    </>
  )
}

export default App
