import React from 'react'
import styled from 'styled-components'
import 'normalize.css'
import { GlobalStyle } from './GlobalStyle'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => (
  <>
    <GlobalStyle />
    <SiteContainer>{children}</SiteContainer>
  </>
)

const SiteContainer = styled.div`
  padding: 1rem;
  max-width: 800px;
  margin: auto;
`
