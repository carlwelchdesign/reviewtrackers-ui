import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
import Home from '../components/Home'
import ReviewDetails from '../components/common/ReviewDetails'
import NavBar from './common/NavBar';

const App = () => {
return (
    <ContentContainer>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<ReviewDetails />} />
          </Routes>
      </BrowserRouter>
    </ContentContainer>
  )
}

export default App

const ContentContainer = styled.div`
  background-color: #7a8292;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
`