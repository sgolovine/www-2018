import React from 'react'
import { PageLayout } from './src/layouts/PageLayout'
import 'normalize.css'

export const wrapPageElement = ({ element, props }) => {
  return <PageLayout {...props}>{element}</PageLayout>
}
