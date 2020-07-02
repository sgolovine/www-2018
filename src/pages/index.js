import React from 'react'
import styled from 'styled-components'
import { ProjectCard } from '../components/ProjectCard'

const projects = [
  {
    title: 'Webhost Watchdog',
    desc:
      'Webhost Watchdog is a blog for comprehensive reviews of webhosting products. Reviews the most popular webhosting products form the top hosting companies in the market today',
    links: [
      {
        title: 'Website',
        href: 'https://webhostwatchdog.com',
      },
    ],
  },
  {
    title: 'Fav Bookmark Manager',
    desc:
      'Fav Bookmark Manager (or simply fav.sh) is an open source bookmark manager extension for Chrome and Firefox that syncs with Github Gist. Backup, collect, publish and share you bookmarks all while staying in control of your data.',
    links: [
      { title: 'Chrome Web Store', href: '#' },
      { title: 'Firefox Addon', href: '#' },
      { title: 'Github', href: '#' },
    ],
  },
  {
    title: 'TipTrack',
    desc:
      'TipTrack is a tip tracking app for servers, bartenders and more. Lets users create custom analytics to track their earnings',
    links: [
      { title: 'App Store', href: '#' },
      { title: 'Google Play Store', href: '#' },
      { title: 'Website', href: '#' },
    ],
  },
]

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

const ProjectsSection = () => (
  <>
    <h2>Side Projects</h2>
    <p>
      Some of my notable side projects that I've been working on recently. I've
      worked on tons of other projecs that you can find on my{' '}
      <a href="https://github.com/sgolovine">Github Page</a>
    </p>
    {projects.map((project) => (
      <ProjectCard
        title={project.title}
        desc={project.desc}
        links={project.links}
      />
    ))}
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
    <Spacer />
    <About />
    <Spacer />
    <ProjectsSection />
    <Spacer />
    <ReachOut />
  </>
)

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`

const Spacer = styled.div`
  height: 2rem;
`
