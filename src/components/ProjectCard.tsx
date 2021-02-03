import React from 'react'
import { Heading3, Text, Link } from '~/components/Text'

type Props = {
  title: string
  desc: string
  links?: {
    name: string
    href: string
  }[]
}

export const ProjectCard = ({ title, desc, links }: Props) => (
  <div className="my-8">
    <Heading3>{title}</Heading3>
    <div className="flex flex-row">
      {links &&
        links.map((link, index) => (
          <div className="pr-2">
            <Link key={index} href={link.href}>
              {link.name}
            </Link>
          </div>
        ))}
    </div>
    <Text>{desc}</Text>
  </div>
)
