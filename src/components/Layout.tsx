import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => (
  <div className="max-w-screen py-12">
    <div className="max-w-screen-md mx-auto px-4">{children}</div>
  </div>
)
