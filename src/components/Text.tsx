import React from 'react'

type TextProps = {
  children: any
}

export const Heading1 = ({ children }: TextProps) => (
  <h1 className="text-3xl font-bold leading-loose text-gray-600">{children}</h1>
)

export const Heading2 = ({ children }: TextProps) => (
  <h2 className="text-2xl font-semibold text-gray-600">{children}</h2>
)

export const Heading3 = ({ children }: TextProps) => (
  <h3 className="text-lg font-semibold text-gray-700">{children}</h3>
)

export const Text = ({ children }: TextProps) => (
  <p className="leading-loose text-gray-900">{children}</p>
)

export const Link = ({ href, children }: TextProps & { href: string }) => (
  <a
    className="leading-loose transition duration-500 ease-in-out text-blue-600 hover:text-blue-400 hover:underline"
    href={href}
  >
    {children}
  </a>
)
