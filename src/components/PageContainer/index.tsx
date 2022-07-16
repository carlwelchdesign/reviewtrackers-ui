import React from 'react'
import styled from 'styled-components'
import Routing from '../Routing'

const PageContainer = () => {
  return (
      <ContentContainer>
        <Routing />
      </ContentContainer>
  )
}

export default PageContainer

const ContentContainer = styled.div`
  background-color: #7a8292;
`
