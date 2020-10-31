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
  <div className="my-8">
    <h4 className="text-xl">{title}</h4>
    <p className="text-gray-900 text-lg leading-loose">{desc}</p>
    <div className="flex flex-row mt-3">
      {links.map((link, index) => (
        <a
          key={index}
          className="mr-4 text-blue-600 hover:underline"
          href={link.href}
        >
          {link.name}
        </a>
      ))}
    </div>
  </div>
)
