import React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <FooterContainer>
      <FooterText>
        Made with ❤ by <a href="https://glvn.co">Sunny Golovine</a>
      </FooterText>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  text-align: center;
  padding: 1rem;
  color: rgb(117, 117, 117);
`

const FooterText = styled.p`
  margin: auto;
`
