import React from 'react'
import { Layout } from './src/components/Layout'
import './src/styles/social-icons.css'
import './src/styles/tailwind.css'

export const wrapPageElement = ({ props, element }) => (
  <Layout {...props}>{element}</Layout>
)
