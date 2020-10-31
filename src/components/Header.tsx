import React, { ReactNode } from 'react'
import { useHeaderLinks } from '~/hooks/useHeaderLinks'
import { GithubIcon } from './icons/Github'
import { InstagramIcon } from './icons/Instagram'
import { LinkedInIcon } from './icons/LinkedIn'
import { TwitterIcon } from './icons/Twitter'

type IconButtonProps = {
  href: string
  children: ReactNode
}

const IconButton = ({ href, children }: IconButtonProps) => (
  <div className="w-8 mx-2">
    <a href={href}>{children}</a>
  </div>
)

export const Header = () => {
  const headerLinks = useHeaderLinks()
  return (
    <div className="flex flex-row justify-end">
      {!!headerLinks.twitter && (
        <IconButton href={headerLinks.twitter}>
          <TwitterIcon />
        </IconButton>
      )}
      {!!headerLinks.github && (
        <IconButton href={headerLinks.github}>
          <GithubIcon />
        </IconButton>
      )}
      {!!headerLinks.linkedin && (
        <IconButton href={headerLinks.linkedin}>
          <LinkedInIcon />
        </IconButton>
      )}
      {!!headerLinks.instagram && (
        <IconButton href={headerLinks.instagram}>
          <InstagramIcon />
        </IconButton>
      )}
    </div>
  )
}
