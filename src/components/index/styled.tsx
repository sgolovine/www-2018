import styled from 'styled-components'

export const SectionHeader = styled.h2`
  font-size: 32px;
`

export const Section = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`

export const ProjectHeading = styled.h3`
  margin-bottom: 0;
  padding-bottom: 0.25rem;
`

export const ProjectLinkContainer = styled.div``

export const ProjectLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  margin-right: 1rem;
  font-size: 14x;
  font-weight: bold;
`

export const ContactSectionContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  div {
    margin-top: 1rem;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`
