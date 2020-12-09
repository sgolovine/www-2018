import React, { ReactNode } from 'react'
import { useHeaderLinks } from '~/hooks/useHeaderLinks'
import { GithubIcon } from './icons/Github'
import { InstagramIcon } from './icons/Instagram'
import { LinkedInIcon } from './icons/LinkedIn'
import { TwitterIcon } from './icons/Twitter'
import { DevToIcon } from './icons/Dev'

type IconButtonProps = {
  href: string
  children: ReactNode
  alt: string
}

const IconButton = ({ href, children, alt }: IconButtonProps) => (
  <a
    href={href}
    title={alt}
    className="flex items-center justify-center h-12 w-12 rounded-full mx-2 transition duration-500 ease-in-out shadow-md hover:shadow-lg"
  >
    <div className="h-6 w-6">{children}</div>
  </a>
)

export const Header = () => {
  const headerLinks = useHeaderLinks()
  return (
    <div className="flex flex-row justify-center md:justify-end">
      {!!headerLinks.dev && (
        <IconButton href={headerLinks.dev} alt="dev.to">
          <DevToIcon />
        </IconButton>
      )}
      {!!headerLinks.twitter && (
        <IconButton href={headerLinks.twitter} alt="twitter">
          <TwitterIcon />
        </IconButton>
      )}
      {!!headerLinks.github && (
        <IconButton href={headerLinks.github} alt="github">
          <GithubIcon />
        </IconButton>
      )}
      {!!headerLinks.linkedin && (
        <IconButton href={headerLinks.linkedin} alt="linkedin">
          <LinkedInIcon />
        </IconButton>
      )}
      {!!headerLinks.instagram && (
        <IconButton href={headerLinks.instagram} alt="instagram">
          <InstagramIcon />
        </IconButton>
      )}
    </div>
  )
}
