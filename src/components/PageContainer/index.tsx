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
  // overflow: hidden;
  // padding-left: 0;
  // display: flex;
  // .contentContainer {
  //   padding: 3px;
  //   padding-left: 0;
  //   flex: 1;
  // }
  // ol,
  // ul {
  //   list-style: revert;
  // }
`
