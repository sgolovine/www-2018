import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
  desc: string
  links: {
    name: string
    href: string
  }[]
}

export const ProjectCard = ({ title, desc, links }: Props) => (
  <ProjectContainer>
    <ProjectHeader>{title}</ProjectHeader>
    <ProjectText>{desc}</ProjectText>
    <ProjectLinksContainer>
      {links.map((link) => (
        <ProjectLink href={link.href}>{link.name}</ProjectLink>
      ))}
    </ProjectLinksContainer>
  </ProjectContainer>
)

const ProjectContainer = styled.div``

const ProjectHeader = styled.h4`
  margin-bottom: 0.25rem;
  padding-bottom: 0;
`

const ProjectText = styled.p`
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 0;
  padding-bottom: 0.25rem;
`

const ProjectLinksContainer = styled.div`
  margin-top: 0;
  padding-top: 0;
`

const ProjectLink = styled.a`
  margin-right: 1rem;
`
