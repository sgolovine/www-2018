import React from 'react'
import { SectionContainer } from '~/components/HomeSection'
import { Heading1, Heading2, Link, Text } from '~/components/Text'
import { ProjectCard } from '../components/ProjectCard'
import { useLinks } from '../hooks/useLinks'
import { useProjects } from '../hooks/useProjects'

const Heading = () => (
  <div className="py-4">
    <Heading1>Sunny Golovine</Heading1>
    <Text>I make iPhone Apps</Text>
  </div>
)

const About = () => (
  <SectionContainer>
    <Heading2>About Me</Heading2>
    <Text>
      I came here from Russia in 2000 and went to Georgia Southern University
      where I graduated with a Bachelors in Computer Science. Since then I have
      worked with several companies helping them build next generation web and
      mobile applications using React, React Native and other modern web and
      mobile technologies.
    </Text>
  </SectionContainer>
)

const ProjectsSection = () => {
  const projects = useProjects()
  return (
    <SectionContainer>
      <Heading2>Side Projects</Heading2>
      <Text>
        Some of my notable side projects that I've been working on recently.
        I've worked on tons of other projects that you can find on my
      </Text>
      <Link href="https://github.com/sgolovine">Github Page</Link>
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
      <Heading2>Find me Elsewhere</Heading2>
      <div className="flex flex-col">
        {links.map((link, index) => {
          return (
            <Link key={index} href={link.href}>
              {link.name}
            </Link>
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
