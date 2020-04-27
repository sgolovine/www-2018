import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { Nav } from '~/components/Nav'

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <GlobalStyles />
    <RootContainer>
      <Nav />
      <ContentContainer>{children}</ContentContainer>
    </RootContainer>
  </>
)

const RootContainer = styled.div`
  padding-top: 1.5em;
  @media (max-width: 900px) {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
`

const ContentContainer = styled.div`
  max-width: 800px;
`
