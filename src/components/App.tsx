import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom"
import ReviewList from '../components/ReviewList'
import ReviewDetails from './ReviewDetails'
import NavBar from './common/NavBar'
import { ContentContainer } from './common/StyledComponents';
import Container from '@mui/material/Container';

const App = () => {
return (
    <ContentContainer>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<ReviewList />}></Route>
          <Route path="/details/:id" element={<ReviewDetails />}></Route>
        </Routes>
      </Container>
    </ContentContainer>
  )
}

export default App
