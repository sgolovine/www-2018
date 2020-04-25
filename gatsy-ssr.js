import React from 'react'
import { PageLayout } from './src/layouts/PageLayout'

export const wrapPageElement = ({ element, props }) => {
  return <PageLayout {...props}>{element}</PageLayout>
}
