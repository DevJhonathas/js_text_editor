import { Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const Router = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
  )
}

export default Router
