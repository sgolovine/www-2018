import React from 'react'

type TextProps = {
  children: string
}

export const Heading1 = ({ children }: TextProps) => (
  <h1 className="text-2xl font-bold leading-loose">{children}</h1>
)

export const Heading2 = ({ children }: TextProps) => (
  <h2 className="text-xl font-semibold">{children}</h2>
)

export const Heading3 = ({ children }: TextProps) => (
  <h3 className="text-lg font-semibold">{children}</h3>
)

export const Text = ({ children }: TextProps) => (
  <p className="text-sm leading-loose">{children}</p>
)

export const Link = ({ href, children }: TextProps & { href: string }) => (
  <a
    className="text-sm leading-loose transition duration-500 ease-in-out text-blue-600 hover:text-blue-400 hover:underline"
    href={href}
  >
    {children}
  </a>
)
