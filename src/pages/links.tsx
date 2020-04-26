import React from 'react'
import { HTMLParagraph } from '~/components/Paragraph'
import { useLinksPageData } from '~/hooks/graphql/pages/useLinksPageData'
import { useContactInfo } from '~/hooks/graphql/useContactInfo'
import styled from 'styled-components'

export default () => {
  const { title, htmlContent } = useLinksPageData()
  const { email, instagram, dev, github, linkedin, medium } = useContactInfo()

  const renderLinks = () => {
    return (
      <LinksContainer>
        <Link target="_blank" rel="noopener noreferrer" href={email.link}>
          Email - {email.username}
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href={instagram.link}>
          Instagram - {instagram.username}
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href={dev.link}>
          Dev - {dev.username}
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href={github.link}>
          Github - {github.username}
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href={linkedin.link}>
          Linkedin - {linkedin.username}
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href={medium.link}>
          Medium - {medium.username}
        </Link>
      </LinksContainer>
    )
  }

  return (
    <>
      <h1>{title}</h1>
      <HTMLParagraph>{htmlContent}</HTMLParagraph>
      {renderLinks()}
    </>
  )
}

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const Link = styled.a`
  margin-top: 1em;
  margin-bottom: 1em;
`
