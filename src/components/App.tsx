import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom"
import styled from 'styled-components';
import ReviewList from '../components/ReviewList'
import ReviewDetails from './ReviewDetails'
import NavBar from './common/NavBar'

const App = () => {
return (
    <ContentContainer>
      <NavBar />
      <Routes>
        <Route path="/" element={<ReviewList />}></Route>
        <Route path="/details/:id" element={<ReviewDetails />}></Route>
      </Routes>
    </ContentContainer>
  )
}

export default App

const ContentContainer = styled.div`
  background-color: #7a8292;
  height: 100%;
  min-height: 100vh;
`