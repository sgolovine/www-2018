import React, { ReactNode } from 'react'
import styled from 'styled-components'

export const Paragraph = styled.p`
  line-height: 2;
`

const _HTMLParagraph = styled.div`
  line-height: 2;
`

export const HTMLParagraph = ({ children }: { children: string }) => (
  <_HTMLParagraph dangerouslySetInnerHTML={{ __html: children }} />
)
