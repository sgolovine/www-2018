import React, { ReactNode } from 'react'
import { NavHeader } from './NavHeader'
import { SocialHeader } from './SocialHeader'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => (
  <div className="max-w-screen">
    <div className="max-w-xl mx-auto py-6 px-4">
      <NavHeader />
      <div className="py-6">{children}</div>
      <SocialHeader />
    </div>
  </div>
)
