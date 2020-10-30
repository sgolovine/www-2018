import React, { ReactNode } from 'react'

export const SectionContainer = ({ children }: { children: ReactNode }) => (
  <div className="my-12">{children}</div>
)

export const SectionHeader = ({ children }: { children: string }) => (
  <h2 className="text-2xl font-semibold">{children}</h2>
)
