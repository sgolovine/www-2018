import React from 'react'
// import { Page } from '../../pages/about'

const AboutPagePreviewTemplate = ({ entry }) => {
  console.log(entry.getIn(['data']))
  return <h1>Check your console</h1>
}

export default AboutPagePreviewTemplate