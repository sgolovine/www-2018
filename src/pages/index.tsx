import React from 'react'
import styled from 'styled-components'
import { ProjectCard } from '../components/ProjectCard'
import { useLinks } from '../hooks/useLinks'
import { useProjects } from '../hooks/useProjects'

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

const ProjectsSection = () => {
  const projects = useProjects()
  return (
    <>
      <h2>Side Projects</h2>
      <p>
        Some of my notable side projects that I've been working on recently.
        I've worked on tons of other projecs that you can find on my{' '}
        <a href="https://github.com/sgolovine">Github Page</a>
      </p>
      {projects.map((project) => (
        <ProjectCard
          title={project.name}
          desc={project.desc}
          links={project.links}
        />
      ))}
    </>
  )
}

const ReachOut = () => {
  const links = useLinks()
  return (
    <>
      <h2>Find me Elsewhere</h2>
      <LinkContainer>
        {links.map((link, index) => {
          return (
            <a key={index} href={link.href}>
              {link.name}
            </a>
          )
        })}
      </LinkContainer>
    </>
  )
}

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
