import React from 'react'
import { SectionContainer, SectionHeader } from '~/components/HomeSection'
import { ProjectCard } from '../components/ProjectCard'
import { useLinks } from '../hooks/useLinks'
import { useProjects } from '../hooks/useProjects'

const Heading = () => (
  <>
    <h1 className="text-5xl">Hi! My name is Sunny!</h1>
    <p>
      I'm a web developer living in Atlanta, GA. I specialize in building
      websites and mobile apps using React.
    </p>
  </>
)

const About = () => (
  <SectionContainer>
    <SectionHeader>About Me</SectionHeader>
    <p>
      Originally from Ekteteriburg, Russia. I came to the United States in 2000
      and have since lived in Atlanta, GA. I currnetly work as a Software
      Engineer, specializing in React and React Native. Check out some of my
      side projects of things I worked on professionally below.
    </p>
  </SectionContainer>
)

const ProjectsSection = () => {
  const projects = useProjects()
  return (
    <SectionContainer>
      <SectionHeader>Side Projects</SectionHeader>
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
    </SectionContainer>
  )
}

const ReachOut = () => {
  const links = useLinks()
  return (
    <SectionContainer>
      <SectionHeader>Find me Elsewhere</SectionHeader>
      <div>
        {links.map((link, index) => {
          return (
            <a key={index} href={link.href}>
              {link.name}
            </a>
          )
        })}
      </div>
    </SectionContainer>
  )
}

export default () => (
  <>
    <Heading />
    <About />
    <ProjectsSection />
    <ReachOut />
  </>
)
