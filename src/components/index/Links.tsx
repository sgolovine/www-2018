import React from 'react'
import { Section, SectionHeader, LinksContainer } from './styled'

export default () => {
  return (
    <Section>
      <SectionHeader>Find me Elsewhere</SectionHeader>
      <LinksContainer>
        <table>
          <tr>
            <td>Email</td>
            <td>
              <a href="mailto:sunny@glvn.co">sunny@glvn.co</a>
            </td>
          </tr>
          <tr>
            <td>Instagram</td>
            <td>
              <a href="https://instagram.com/sgolovine">sgolovine</a>
            </td>
          </tr>
          <tr>
            <td>The Practical Dev</td>
            <td>
              <a href="https://dev.to/sgolovine">sgolovine</a>
            </td>
          </tr>
          <tr>
            <td>Github</td>
            <td>
              <a href="https://github.com/sgolovine">sgolovine</a>
            </td>
          </tr>
          <tr>
            <td>LinkedIn</td>
            <td>
              <a href="https://linkedin.com/in/SunnyGolovine">SunnyGolovine</a>
            </td>
          </tr>
          <tr>
            <td>Resume</td>
            <td>
              <a href="https://resume.glvn.co">Link</a>
            </td>
          </tr>
        </table>
      </LinksContainer>
    </Section>
  )
}
