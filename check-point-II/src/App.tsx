import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
