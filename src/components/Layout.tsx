import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => (
  <div className="max-w-screen">
    <div className="container mx-auto">{children}</div>
  </div>
)
