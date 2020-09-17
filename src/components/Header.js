import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const Header = () => {
  return (
    <Container>
      <HeaderLink to="/">Home</HeaderLink>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const HeaderLink = styled(Link)`
  margin-right: 2rem;
`
