import React from 'react'
import {
  Section,
  SectionHeader,
  ProjectHeading,
  ProjectLinkContainer,
  ProjectLink,
} from './styled'

export default () => (
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
      <ProjectLinkContainer>
        <ProjectLink href="#">Website</ProjectLink>
      </ProjectLinkContainer>
    </p>

    <ProjectHeading>TipTrack</ProjectHeading>
    <p>
      A webhosting review site that tries to cut through the marketing fluff and
      give readers accurate, concice and to the point reviews and comparisons of
      webhosting products.
      <ProjectLinkContainer>
        <ProjectLink href="#">Website</ProjectLink>
        <ProjectLink href="#">App Store</ProjectLink>
        <ProjectLink href="#">Google Play Store</ProjectLink>
      </ProjectLinkContainer>
    </p>
    <ProjectHeading>Fav Bookmark Manager</ProjectHeading>
    <p>
      Open source alternative bookmark manager for Firefox, Chrome and other
      Chromium browsers. Syncronizes with Github Gist API. Built with ReactJS
      and Material UI
      <ProjectLinkContainer>
        <ProjectLink href="#">Website</ProjectLink>
        <ProjectLink href="#">Chrome Web Store</ProjectLink>
        <ProjectLink href="#">Firefox Addons</ProjectLink>
      </ProjectLinkContainer>
    </p>
    <ProjectHeading>CopyBin</ProjectHeading>
    <p>
      React Native app. Lets you quickly Copy and Paste Canned Responses.
      Avaliable on Google Play
      <ProjectLinkContainer>
        <ProjectLink href="#">Google Play Store</ProjectLink>
      </ProjectLinkContainer>
    </p>
  </Section>
)
