import React from 'react'
import { HTMLParagraph } from '~/components/Paragraph'
import { useLinksPageData } from '~/hooks/graphql/pages/useLinksPageData'
import { useContactInfo, ContactInfo } from '~/hooks/graphql/useContactInfo'
import styled from 'styled-components'
import { LinkItem } from '~/types/links'

type PageProps = {
  title: string
  htmlContent: string
  contactInfo: ContactInfo
  links: LinkItem[]
}

const LinksList = (props: ContactInfo) => {
  const { email, instagram, dev, github, linkedin, medium } = props
  return (
    <>
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
    </>
  )
}

const AdditionalLinks = ({ links }: { links: LinkItem[] }) => (
  <>
    {links.map((link, index) => (
      <Link
        key={index}
        target="_blank"
        rel="noopener noreferrer"
        href={link.linkHref}
      >
        {link.linkName}
      </Link>
    ))}
  </>
)

export const Page = (props: PageProps) => {
  const { title, htmlContent, contactInfo, links } = props
  return (
    <>
      <h1>{title}</h1>
      <HTMLParagraph>{htmlContent}</HTMLParagraph>
      <LinksContainer>
        <LinksList
          email={contactInfo.email}
          instagram={contactInfo.instagram}
          dev={contactInfo.dev}
          github={contactInfo.github}
          linkedin={contactInfo.linkedin}
          medium={contactInfo.medium}
        />
        <AdditionalLinks links={links} />
      </LinksContainer>
    </>
  )
}

export default () => {
  const { title, htmlContent, links } = useLinksPageData()
  const contactInfo = useContactInfo()

  return (
    <Page
      title={title}
      htmlContent={htmlContent}
      contactInfo={contactInfo}
      links={links}
    />
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
