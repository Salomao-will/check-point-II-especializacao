import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./pages/main";
import { SectionCards } from "./components/section-cards";
import { Favorites } from "./pages/favorites";
import { Details } from "./pages/details";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<SectionCards />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
