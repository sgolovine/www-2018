import React from 'react'
import { PageLayout, RootLayout } from './src/components/Layout'

export const wrapRootElement = ({ element, props }) => (
  <RootLayout {...props}>{element}</RootLayout>
)

export const wrapPageElement = ({ element, props }) => {
  return <PageLayout {...props}>{element}</PageLayout>
}
