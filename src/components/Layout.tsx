import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Nav } from '~/components/Nav'
import { fadeInContent } from '~/helpers/animation'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Nav />
      {children}
    </Container>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1.5em;
  animation: ${fadeInContent} ease-in 500ms;
`
