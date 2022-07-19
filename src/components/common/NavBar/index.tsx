import Typography from '@mui/material/Typography'
import React from 'react'
import styled from 'styled-components'

const NavBar = () => {
  return (
    <Header>
      <Typography variant={'h6'} sx={{ fontSize: 18,  fontWeight: 600 }} color="text.white" gutterBottom>
        Reviews
      </Typography>
    </Header>
  )
}

export default NavBar

const Header = styled.div`
  padding: 3px 48px;
  background-color: #0741a3;
  color: white;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 70px;
`