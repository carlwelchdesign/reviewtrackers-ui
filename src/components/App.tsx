import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
import Home from '../components/Home'
import NavBar from '../components/NavBar';

const App = () => {
return (
    <BrowserRouter>
      <NavBar />
      <ContentContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Home />} />
        </Routes>
      </ContentContainer>
    </BrowserRouter>
  )
}

export default App

const ContentContainer = styled.div`
  background-color: #7a8292;
`