import React, { ReactNode } from 'react'
import styled from 'styled-components'
// import 'normalize.css'

export default ({ children }: { children: ReactNode }) => (
  <Container>
    <ContentContainer>{children}</ContentContainer>
  </Container>
)

const Container = styled.div``

const ContentContainer = styled.div`
  padding-top: 2rem;
  max-width: 800px;
  margin: auto;
  @media (max-width: 799px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`
