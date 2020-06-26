import React from 'react'
import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(absolutePath: { regex: "/hand-waving.png/" }) {
        childImageSharp {
          fluid(maxHeight: 64) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Image fluid={data.file.childImageSharp.fluid} />
      <Text>Hi! My name is Sunny</Text>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Text = styled.h1`
  font-size: 3rem;
  margin-left: 1rem;
  line-height: 64px;
  paddding: 0;
  @media (max-width: 1000px) {
    font-size: 32px;
  }
  @media (max-width: 800px) {
    font-size: 28px;
    line-height: 48px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
  @media (max-width: 400px) {
    line-height: 32px;
  }
`

const Image = styled(GatsbyImage)`
  height: 64px;
  width: 64px;
  @media (max-width: 800px) {
    height: 48px;
    width: 48px;
  }
  @media (max-width: 400px) {
    height: 32px;
    width: 32px;
  }
`
