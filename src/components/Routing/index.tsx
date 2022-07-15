import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Home'
import NavBar from '../NavBar';

const Routing = () => {
return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routing