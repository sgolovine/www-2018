import React from 'react'
import styled from 'styled-components'
import 'normalize.css'
import { GlobalStyle, LightTheme } from './GlobalStyle'
import { Header } from './Header'

export const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <LightTheme />
    <SiteContainer>
      <Header />
      {children}
    </SiteContainer>
  </>
)

const SiteContainer = styled.div`
  padding: 1rem;
  max-width: 800px;
  margin: auto;
`
