import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => (
  <div className="max-w-screen">
    <div className="max-w-xl mx-auto py-6">{children}</div>
  </div>
)
