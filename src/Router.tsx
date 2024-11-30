import { Routes, Route, BrowserRouter } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
