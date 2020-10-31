import React from 'react'
import { Header } from '~/components/Header'
import { SectionContainer, SectionHeader } from '~/components/HomeSection'
import { ProjectCard } from '../components/ProjectCard'
import { useLinks } from '../hooks/useLinks'
import { useProjects } from '../hooks/useProjects'

const Heading = () => (
  <>
    <h1 className="text-5xl">Hi! My name is Sunny!</h1>
    <p className="text-lg leading-loose">
      I'm a web developer living in Atlanta, GA. I specialize in building
      websites and mobile apps using React.
    </p>
  </>
)

const About = () => (
  <SectionContainer>
    <SectionHeader>About Me</SectionHeader>
    <p className="text-lg leading-loose">
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
      <p className="text-lg leading-loose">
        Some of my notable side projects that I've been working on recently.
        I've worked on tons of other projecs that you can find on my{' '}
        <a
          className="text-blue-600 hover:underline"
          href="https://github.com/sgolovine"
        >
          Github Page
        </a>
      </p>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
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
      <div className="flex flex-col">
        {links.map((link, index) => {
          return (
            <a
              className="text-blue-600 hover:underline text-lg leading-loose"
              key={index}
              href={link.href}
            >
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
    <Header />
    <Heading />
    <About />
    <ProjectsSection />
    <ReachOut />
  </>
)
