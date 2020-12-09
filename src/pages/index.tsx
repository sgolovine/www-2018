import React from 'react'
import { Header } from '~/components/Header'
import { SectionContainer } from '~/components/HomeSection'
import { Heading1, Heading2, Link, Text } from '~/components/Text'
import { ProjectCard } from '../components/ProjectCard'
import { useLinks } from '../hooks/useLinks'
import { useProjects } from '../hooks/useProjects'

const Heading = () => (
  <div className="py-4">
    <Heading1>Sunny Golovine</Heading1>
    <Text>
      I'm a web developer living in Atlanta, GA. I specialize in building
      websites and mobile apps using React.
    </Text>
  </div>
)

const About = () => (
  <SectionContainer>
    <Heading2>About Me</Heading2>
    <Text>
      Originally from Ekteteriburg, Russia. I came to the United States in 2000
      and have since lived in Atlanta, GA. I currnetly work as a Software
      Engineer, specializing in React and React Native. Check out some of my
      side projects of things I worked on professionally below.
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
    <Header />
    <div>
      <Heading />
      <About />
      <ProjectsSection />
      <ReachOut />
    </div>
  </>
)
