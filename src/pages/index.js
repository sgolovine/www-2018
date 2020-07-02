import React from 'react'
import styled from 'styled-components'

const Heading = () => (
  <>
    <h1>Hi! My name is Sunny!</h1>
    <p>
      I'm a web developer living in Atlanta, GA. I specialize in building
      websites and mobile apps using React.
    </p>
  </>
)

const About = () => (
  <>
    <h2>About Me</h2>
    <p>
      Originally from Ekteteriburg, Russia. I came to the United States in 2000
      and have since lived in Atlanta, GA. I currnetly work as a Software
      Engineer, specializing in React and React Native. Check out some of my
      side projects of things I worked on professionally below.
    </p>
  </>
)

const Projects = () => (
  <>
    <h2>Side Projects</h2>
    <p>
      Some of my side projects. You can find all my code on my&nbsp;
      <a href="https://github.com/sgolovine">Github page</a>.
    </p>
    <h3>Webhost Watchdog</h3>
    <p>
      Webhost Watchdog is a blog for comprehensive reviews of webhosting
      products. Reviews the most popular webhosting products form the top
      hosting companies in the market today.
    </p>
    <h3>TipTrack</h3>
    <p>
      TipTrack is a tip tracking app for servers, bartenders and more. Lets
      users create custom analytics to track their earnings
    </p>
    <h3>Fav Bookmark Manager</h3>
    <p>
      Fav Bookmark Manager (or simply fav.sh) is an open source bookmark manager
      that syncs with Github Gist. Backup, collect, publish and share you
      bookmarks all while staying in control of your data.
    </p>
  </>
)

const ReachOut = () => (
  <>
    <h2>Find me Elsewhere</h2>
    <LinkContainer>
      <a href="https://github.com/sgolovine">Github (sgolovine)</a>
      <a href="https://instagram.com/sgolovine">Instagram (sgolovine)</a>
      <a href="https://dev.to/sgolovine">The Practical Dev (sgolovine)</a>
      <a href="https://linkedin.com/in/SunnyGolovine">
        Linkedin (SunnyGolovine)
      </a>
      <a href="https://resume.glvn.co">Resume</a>
    </LinkContainer>
  </>
)

export default () => (
  <>
    <Heading />
    <hr />
    <About />
    <hr />
    <Projects />
    <hr />
    <ReachOut />
  </>
)

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`
