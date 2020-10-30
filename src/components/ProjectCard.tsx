import React from 'react'

type Props = {
  title: string
  desc: string
  links: {
    name: string
    href: string
  }[]
}

export const ProjectCard = ({ title, desc, links }: Props) => (
  <div className="my-4">
    <h4 className="text-xl">{title}</h4>
    <p>{desc}</p>
    <div>
      {links.map((link) => (
        <a href={link.href}>{link.name}</a>
      ))}
    </div>
  </div>
)
