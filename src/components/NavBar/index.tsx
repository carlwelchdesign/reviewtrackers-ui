import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {
  return (
    <Header>
      <Link to="details">Details</Link>
    </Header>
  )
}

export default NavBar

const Header = styled.div`
  padding: 3px;
  background-color: #0741a3;
  color: white;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 70px;
`