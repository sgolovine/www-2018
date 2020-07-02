import React from 'react'
import styled from 'styled-components'
import 'normalize.css'
import { GlobalStyle } from './GlobalStyle'

export const Layout = ({ children }) => (
  <SiteContainer>
    <GlobalStyle />
    {children}
  </SiteContainer>
)

const SiteContainer = styled.div`
  padding: 1rem;
  max-width: 800px;
  margin: auto;
`
