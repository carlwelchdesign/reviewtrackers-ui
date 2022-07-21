import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom"
import ReviewList from '../components/ReviewList'
import ReviewDetails from './ReviewDetails'
import NavBar from './common/NavBar'
import { ContentContainer } from './common/StyledComponents';

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
