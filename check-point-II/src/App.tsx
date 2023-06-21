// import { useDispatch, useSelector } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// const dispatch = useDispatch()

// const {pages} = useSelector((state) => state.pages)

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <h1 className='text-slate-950'>Hello World</h1>
    }
  ])

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
