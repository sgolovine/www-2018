import React, { ReactNode } from 'react'

export const SectionContainer = ({ children }: { children: ReactNode }) => (
  <div className="my-8">{children}</div>
)

export const SectionHeader = ({ children }: { children: string }) => (
  <h2 className="text-3xl">{children}</h2>
)
