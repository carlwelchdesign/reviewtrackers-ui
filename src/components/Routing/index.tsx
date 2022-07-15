import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Home'
import NavBar from '../NavBar';
import ReviewList from "../ReviewList";

const Routing = () => {
return (
    <BrowserRouter>
          <NavBar />

        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="details" element={<ReviewList />} />
         </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing