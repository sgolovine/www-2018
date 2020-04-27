import React from 'react'
import { HTMLParagraph } from '~/components/Paragraph'
import { useLinksPageData } from '~/hooks/graphql/pages/useLinksPageData'
import { useContactInfo } from '~/hooks/graphql/useContactInfo'
import styled from 'styled-components'

type ContactInfo = ReturnType<typeof useContactInfo>

type PageProps = {
  title: string
  htmlContent: string
  contactInfo: ContactInfo
}

const LinksList = (props: ContactInfo) => {
  const { email, instagram, dev, github, linkedin, medium } = props
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

export const Page = (props: PageProps) => {
  return (
    <>
      <h1>{props.title}</h1>
      <HTMLParagraph>{props.htmlContent}</HTMLParagraph>
      <LinksList {...props.contactInfo} />
    </>
  )
}

export default () => {
  const { title, htmlContent } = useLinksPageData()
  const contactInfo = useContactInfo()

  return (
    <Page title={title} htmlContent={htmlContent} contactInfo={contactInfo} />
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
