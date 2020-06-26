import React from 'react'
import Heading from '~/components/Heading'
import { Section, SectionHeader } from '~/components/Section'
import styled from 'styled-components'

const AboutSection = () => (
  <Section>
    <SectionHeader>About Me</SectionHeader>
    <p>
      Hi my name is Sunny! I&apos;m a full stack developer currently based in
      Atlanta. Originally from Russia, I came to the United States at the age of
      5, growing up in the Atlanta suburbs and eventually attending Georgia
      Southern University where I got a degree in Computer Science. Since then
      I&apos;ve worked for several companies in the Atlanta Area and have got a
      few cool side hustles as well. If you&apos;re interested in working
      together feel free to reach out.
    </p>
  </Section>
)

const ProjectSection = () => (
  <Section>
    <SectionHeader>My Projects</SectionHeader>
    <p>
      Check out some cool projects I&apos;ve worked on and client work I did.
      You can find more of my projects on my Github Page
    </p>
    <ProjectHeading>Webhost Watchdog</ProjectHeading>
    <p>
      The worlds smartest tip tracker. Built with React Native, avaliable for
      iOS and Android
    </p>
    <ProjectHeading>TipTrack</ProjectHeading>
    <p>
      A webhosting review site that tries to cut through the marketing fluff and
      give readers accurate, concice and to the point reviews and comparisons of
      webhosting products.
    </p>
    <ProjectHeading>Fav Bookmark Manager</ProjectHeading>
    <p>
      Open source alternative bookmark manager for Firefox, Chrome and other
      Chromium browsers. Syncronizes with Github Gist API. Built with ReactJS
      and Material UI
    </p>
    <ProjectHeading>CopyBin</ProjectHeading>
    <p>
      React Native app. Lets you quickly Copy and Paste Canned Responses.
      Avaliable on Google Play
    </p>
  </Section>
)

const ContactSection = () => {
  return (
    <ContactSectionContainer>
      <SectionHeader>Reach Out</SectionHeader>
      <label htmlFor="name">Name</label>
      <input name="name" />

      <label htmlFor="email">Email</label>
      <input name="email" />

      <label htmlFor="message">Message</label>
      <textarea name="message" />
      <div>
        <button>Send</button>
      </div>
    </ContactSectionContainer>
  )
}

export default () => {
  return (
    <>
      <Heading />
      <p>
        My name is Sunny Golovine and I'm a Software Engineer living in Atlanta,
        GA
      </p>
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </>
  )
}

const ProjectHeading = styled.h3`
  margin-bottom: 0;
  padding-bottom: 0.25rem;
`

const ContactSectionContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  label {
    font-size: 12.5px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  div {
    margin-top: 1rem;
  }
  button {
    width: 150px;
  }
`
